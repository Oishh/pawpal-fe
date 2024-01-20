import { DataView } from "primereact/dataview";
import React, { useEffect, useState, useRef } from "react";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { Toast } from "primereact/toast";
import { Image } from "primereact/image";
import { FileUpload } from "primereact/fileupload";
import { confirmDialog, ConfirmDialog } from "primereact/confirmdialog";
import PocketBase from "pocketbase";

const pb = new PocketBase("https://pawpal-backend.pockethost.io");

export default function Missing() {
  const [post, setPost] = useState([]);
  const [postInfo, setPostInfo] = useState([]);
  const [view, setView] = useState(false);
  // const [ready, setReady] = useState(false);
  const [file, setFile] = useState(null);
  const [fileDataURL, setFileDataURL] = useState(null);
  const formData = new FormData();
  const toast = useRef(null);

  const fetchPosts = async () => {
    try {
      const authData = await pb.admins.authWithPassword(
        process.env.AUTH_USER,
        process.env.AUTH_PASS
      );
      const records = await pb.collection("missings").getFullList({
        sort: "-created",
      });
      console.log("{}", records);
      setPost(records);
    } catch (ex) {
      console.log("{}", ex);
    }
  };

  const postMissing = async () => {
    try {
      if (fileDataURL != null) {
        formData.append("name", postInfo.name);
        formData.append("description", postInfo.description);
        formData.append("attachment", file);

        console.log("formData: {}", formData);

        const authData = await pb.admins.authWithPassword(
          process.env.AUTH_USER,
          process.env.AUTH_PASS
        );

        const record = await pb.collection("missings").create(formData);
        console.log("post: {}", record);
        setView(false);
        toastSuccess();
      } else {
        toast.current.show({
          severity: "error",
          summary: "Error",
          detail: `Please upload an image.`,
          life: 2000,
        });
      }
    } catch (ex) {
      console.log("{}", ex);
    }
  };

  useEffect(() => {
    let fileReader,
      isCancel = false;
    if (file) {
      fileReader = new FileReader();
      fileReader.onload = (e) => {
        const { result } = e.target;
        if (result && !isCancel) {
          setFileDataURL(fileReader.result);
        }
      };
      fileReader.readAsDataURL(file);
    }
    return () => {
      isCancel = true;
      if (fileReader && fileReader.readyState === 1) {
        fileReader.abort();
      }
    };
  }, [file]);

  const handleFileChange = (e) => {
    const acceptUpload = () => {
      toast.current.show({
        severity: "success",
        summary: "Confirmed",
        detail: "File successfully uploaded.",
        life: 3000,
      });

      const file = e.files[0];
      setFile(file);
    };

    const rejectUpload = () => {
      toast.current.show({
        severity: "warn",
        summary: "Rejected",
        detail: "You have rejected",
        life: 3000,
      });
      e.options.clear();
    };

    confirmDialog({
      message: "Do you want to upload this image file?",
      header: "Confirm",
      icon: "pi pi-info-circle",
      position: "top",
      accept: acceptUpload,
      reject: rejectUpload,
    });
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const toastSuccess = () => {
    toast.current.show({
      severity: "success",
      summary: "Successful",
      detail: `Post has been successfully added.`,
      life: 2000,
    });
  };

  // const toastError = (detail) => {
  //   toast.current.show({
  //     severity: "error",
  //     summary: "Error",
  //     detail: `${detail}.`,
  //     life: 2000,
  //   });
  // };

  const imgUrl = "https://pawpal-backend.pockethost.io/api/files/";

  const feedTemplate = (_post) => {
    return (
      <li className="py-3 border-bottom-1 surface-border flex w-full md:align-items-start md:justify-content-between flex-column md:flex-row">
        <div className="flex align-items-start mr-0 lg:mr-5">
          <Image
            src={
              imgUrl +
              _post.collectionId +
              "/" +
              _post.id +
              "/" +
              _post.attachment +
              "?token="
            }
            zoomSrc={
              imgUrl +
              _post.collectionId +
              "/" +
              _post.id +
              "/" +
              _post.attachment +
              "?token="
            }
            className="mr-4"
            alt="Image"
            preview
            height="150px"
            width="150px"
          />
          <div>
            <span className="text-900 font-medium block mb-2">
              {_post.name}
            </span>
            <div className="text-700 mb-2">{_post.description}</div>
          </div>
        </div>
        <span className="block text-500 font-medium">
          {_post.created.split(" ")[0]}
        </span>
      </li>
    );
  };

  const viewFooterDialog = (
    <div>
      <Button
        // disabled={ready === false}
        label="Post"
        icon="pi pi-check"
        onClick={() => {
          postMissing();
        }}
        severity="primary"
      />
    </div>
  );

  const handleChange = ({ currentTarget: input }) => {
    console.log("name: {}", input.name);
    console.log("value: {}", input.value);
    const _info = { ...postInfo };
    _info[input.name] = input.value;
    setPostInfo(_info);
  };

  return (
    <div className="flex flex-column">
      <Toast ref={toast} />
      <ConfirmDialog />
      <div className="justify-content-center py-4 px-8 mx-8">
        <div className="px-8">
          <span className="block text-4xl font-bold text-center">
            Help Us Find Our Furry Friends!
          </span>
        </div>
        <div className="px-8 pt-6">
          <span className="block text-2xl text-center">
            This page aids in the search for missing pets. Share information,
            help reunite pets with their families, and bring our furry friends
            home!
          </span>
        </div>
        <div className="pt-4 flex justify-content-end">
          <Button
            label="Report a Missing Pet"
            onClick={() => {
              setView(true);
            }}
          />
        </div>
        <div className="card flex justify-content-center pt-4">
          <div className="surface-card shadow-2 border-round p-4 w-full">
            <ul className="list-none p-0 m-0">
              <DataView value={post} itemTemplate={feedTemplate} />
            </ul>
          </div>
        </div>
      </div>

      <Dialog
        header="Report a Missing Pet"
        visible={view}
        className="p-fluid"
        style={{ width: "50vw" }}
        onHide={() => {
          setView(false);
        }}
        footer={viewFooterDialog}
      >
        <div className="flex flex-column p-3 overflow-y-auto max-h-25rem">
          <div className="flex m-2 align-items-center justify-content-center surface-card shadow-2 border-round p-4">
            <div className="col flex flex-column align-items-start">
              <label htmlFor="name" className="text-900 font-medium mb-2">
                Name
              </label>
              <span className="p-input-icon-left">
                <i className="pi pi-user" />
                <InputText name="name" onChange={(e) => handleChange(e)} />
              </span>
              <label htmlFor="desc" className="text-900 font-medium my-2">
                Description
              </label>
              <span className="p-input-icon-left">
                <i className="pi pi-info-circle" />
                <InputText
                  name="description"
                  onChange={(e) => handleChange(e)}
                />
              </span>
              <label
                htmlFor="description"
                className="text-900 font-medium my-2"
              >
                Attachment
              </label>
              <div className="flex justify-between">
                <span className="p-input-icon-left">
                  <i className="pi pi-paperclip" />
                  <FileUpload
                    name="fileInput"
                    mode="basic"
                    accept=".png, .jpg, .jpeg"
                    customUpload
                    uploadHandler={(e) => handleFileChange(e)}
                    auto={true}
                    chooseLabel="Upload"
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
      </Dialog>
    </div>
  );
}
