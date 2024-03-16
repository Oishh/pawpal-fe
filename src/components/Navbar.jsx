import { React, useEffect, useState } from "react";
import logo from "../resources/pawpal_icon_white.png";
import { Link } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    console.log("open: " + open);
  }, [open]);

  return (
    <>
      <div className="bg-gray-900 p-5 flex shadow-2 align-items-center justify-content-center lg:justify-content-around relative border-bottom-1 border-gray-800 sticky top-0 z-4">
        <img
          alt="PawPal Logo"
          src={logo}
          className="mr-0 lg:mr-6 w-4rem h-4rem"
        />
        <div className="hidden lg:flex">
          <ul className="list-none p-0 m-0 flex lg:align-items-center select-none flex-column lg:flex-row gap-2">
            <li>
              <Link
                to="/pawpal/home"
                className="no-underline p-ripple flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-gray-400 hover:text-white hover:bg-gray-800 font-medium border-round cursor-pointer transition-colors transition-duration-150 w-full"
              >
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link
                to="/pawpal/adopt"
                className="no-underline p-ripple flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-gray-400 hover:text-white hover:bg-gray-800 font-medium border-round cursor-pointer transition-colors transition-duration-150 w-full"
              >
                <span>Adopt</span>
              </Link>
            </li>
            <li>
              <Link
                to="/pawpal/about"
                className="no-underline p-ripple flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-gray-400 hover:text-white hover:bg-gray-800 font-medium border-round cursor-pointer transition-colors transition-duration-150 w-full"
              >
                <span>About Us</span>
              </Link>
            </li>
            <li>
              <Link
                to="/pawpal/donate"
                className="bg-primary no-underline p-ripple flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-gray-400 hover:text-white hover:bg-primary-700 font-medium border-round cursor-pointer transition-colors transition-duration-150 w-full"
              >
                <span>Donate</span>
              </Link>
            </li>
            <li>
              <Link
                to="/pawpal/missing"
                className="no-underline p-ripple flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-gray-400 hover:text-white hover:bg-gray-800 font-medium border-round cursor-pointer transition-colors transition-duration-150 w-full"
              >
                <span>Missing</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="absolute top-0 right-0 py-6 px-4 z-5 lg:hidden">
        <a
          onClick={() => setOpen(!open)}
          className="p-ripple cursor-pointer block text-700 mr-3"
        >
          <i className="pi pi-bars text-4xl text-white"></i>
          <span role="presentation" className="p-ink"></span>
        </a>
      </div>

      {open === true && (
        <div className="block lg:hidden">
          <ul className="list-none p-0 m-0 flex lg:align-items-center select-none flex-column lg:flex-row gap-2 bg-black-alpha-10">
            <li>
              <Link
                to="/pawpal/home"
                className="no-underline p-ripple flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-gray-400 hover:text-white hover:bg-gray-800 font-medium border-round cursor-pointer transition-colors transition-duration-150 w-full"
              >
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link
                to="/pawpal/adopt"
                className="no-underline p-ripple flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-gray-400 hover:text-white hover:bg-gray-800 font-medium border-round cursor-pointer transition-colors transition-duration-150 w-full"
              >
                <span>Adopt</span>
              </Link>
            </li>
            <li>
              <Link
                to="/pawpal/about"
                className="no-underline p-ripple flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-gray-400 hover:text-white hover:bg-gray-800 font-medium border-round cursor-pointer transition-colors transition-duration-150 w-full"
              >
                <span>About Us</span>
              </Link>
            </li>
            <li>
              <Link
                to="/pawpal/donate"
                className="bg-primary no-underline p-ripple flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-gray-400 hover:text-white hover:bg-primary-700 font-medium border-round cursor-pointer transition-colors transition-duration-150 w-full"
              >
                <span>Donate</span>
              </Link>
            </li>
            <li>
              <Link
                to="/pawpal/missing"
                className="no-underline p-ripple flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-gray-400 hover:text-white hover:bg-gray-800 font-medium border-round cursor-pointer transition-colors transition-duration-150 w-full"
              >
                <span>Missing</span>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}

export default Navbar;
