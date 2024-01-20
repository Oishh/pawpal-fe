import bg from "../../resources/about_bg.jpg";
import bg2 from "../../resources/about bg 2.jpg";
import { Image } from "primereact/image";
export default function About() {
  return (
    <>
      <div
        className="flex min-h-screen bg-center bg-no-repeat bg-cover"
        style={{ backgroundImage: `url("${bg}")` }}
      >
        <div className="flex flex-column justify-center py-4 px-8 mx-8 z-5">
          <span
            className="block text-5xl font-italic text-blue-900 text-center"
            style={{ textShadow: "-3px 2px #ffffff" }}
          >
            Be a Part of
          </span>
          <span
            className="block text-8xl font-bold text-blue-900 text-center"
            style={{ textShadow: "-3px 2px #ffffff" }}
          >
            Our Mission
          </span>
          <div className="pt-2">
            <span
              className="block text-5xl text-blue-900 text-justify line-height-4"
              style={{ textShadow: "-1px 1px 0 #ffffff" }}
            >
              Pawpal aims to work in ensuring the prevention of cruelty and
              suffering of animals. It strives towards protection and promotion
              of their welfare by advocating an improvement to their living
              conditions, by campaigning to eliminate causes that bring about
              pain and discomfort to the animals. Pawpal will work towards a
              symbiotic, harmonious and healthy environment for both humans and
              animals.
            </span>
          </div>
          <div className="card flex justify-content-center pt-4"></div>
        </div>
      </div>
      <div
        className="flex align-items-stretch"
        style={{ height: "70vh", overflow: "hidden" }}
      >
        <Image
          src={bg2}
          alt="Card"
          style={{ height: "100%", width: "100%", objectFit: "cover" }}
        />
      </div>
      <div className="flex flex-column justify-center py-4 px-8 mx-8">
        <span className="block text-7xl font-bold text-black text-center">
          ENDING THE DOG MEAT TRADE
        </span>
        <div className="pt-4 px-8">
          <span className="block text-3xl text-black text-center">
            The cruel dog meat trade is one of the most serious animal welfare
            concerns in the Philippines. No animal on earth deserves the
            treatment that dog butchers and animal abusers give to these
            innocent dogs.
          </span>
        </div>
        <div className="card flex justify-content-center pt-4"></div>
      </div>
    </>
  );
}
