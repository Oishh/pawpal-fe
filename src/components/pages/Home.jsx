import { Button } from "primereact/button";
import bg from "../../resources/zzz.jpg";
import { Link } from "react-router-dom";
import logo from "../../resources/pawpal_icon.png";

export default function Home() {
  return (
    <div className="grid">
      <div
        className="col-12 flex align-items-center justify-content-center min-h-full bg-end bg-no-repeat bg-cover"
        style={{ backgroundImage: `url("${bg}")` }}
      >
        <div className="flex flex-column p-8 text-center md:text-center align-items-center ">
          <span
            className="text-8xl font-bold mb-1 text-white text"
            style={{ textShadow: "-5px 5px 4px rgba(0, 0, 0, 0.7)" }}
          >
            Adopt Love
          </span>
          <span
            className="text-8xl font-bold mb-1 text-white"
            style={{ textShadow: "-5px 5px 4px rgba(0, 0, 0, 0.7)" }}
          >
            Change a Life
          </span>

          {/* <span
              className="block text-2xl line-height-3 text-white mb-4"
              style={{ textShadow: "-1px 2px 0 #00008B" }}
            >
              Discover the joy of giving a rescue pet a loving home. Join our
              mission to make second chances happen for countless deserving
              animals. Together, we can turn compassion into action.
            </span> */}

          <div className="pt-8">
            <Link to="/pawpal/adopt">
              <Button
                label="ADOPT TODAY"
                type="button"
                className="shadow-2 hover:shadow-8 h-4rem w-15rem px-3 "
                severity="info"
                size="large"
              ></Button>
            </Link>
            {/* <Link to="/pawpal/donate">
                <Button
                  label="Donate"
                  type="button"
                  severity="primary"
                  raised
                ></Button>
              </Link> */}
          </div>
        </div>
      </div>
      <div className="flex col-12 align-items-center justify-content-center min-h-full">
        <div className="flex flex-column justify p-8 text-center md:text-center justify-content-center align-items-center">
          <img alt="PawPal Logo" src={logo} className="mr-0 w-8rem h-8rem" />

          <div className="px-8 flex flex-column justify-content-center text-center max-w-2-rem">
            <span className="text-3xl text-primary text-center">
              Discover the joy of giving a rescue pet a loving home.
              {/* Join our
              mission to make second chances happen for countless deserving
              animals. Together, we can turn compassion into action. */}
            </span>
            <span className="text-2xl text-black text-center mt-5">
              Join our mission to make second chances happen for countless
              deserving animals.
            </span>
            <span className="text-2xl text-black text-center">
              Together, we can turn compassion into action.
            </span>
          </div>

          <Link to="/pawpal/about">
            <Button
              label="ABOUT US"
              type="button"
              className="shadow-2 hover:shadow-8 h-4rem w-15rem px-3 mt-7"
              severity="primary"
              size="large"
            ></Button>
          </Link>
        </div>
      </div>
      <div className="flex col-12 align-items-center justify-content-center min-h-full bg-primary">
        <div className="flex flex-column justify p-8 text-center justify-content-center align-items-center">
          <svg
            height="100"
            width="100"
            className="mb-3 icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            fill="#000000"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                d="M249.6 460.8l108.8 211.2 202.666667-83.2 93.866666-270.933333-315.733333 17.066666z"
                fill="#E69329"
              ></path>
              <path
                d="M320 768m-166.4 0a166.4 166.4 0 1 0 332.8 0 166.4 166.4 0 1 0-332.8 0Z"
                fill="#546E7A"
              ></path>
              <path
                d="M320 576c-106.666667 0-192 85.333333-192 192s85.333333 192 192 192 192-85.333333 192-192-85.333333-192-192-192z m0 341.333333c-83.2 0-149.333333-66.133333-149.333333-149.333333s66.133333-149.333333 149.333333-149.333333 149.333333 66.133333 149.333333 149.333333-66.133333 149.333333-149.333333 149.333333z"
                fill="#90A4AE"
              ></path>
              <path
                d="M298.666667 704h42.666666v170.666667h-42.666666z"
                fill="#90A4AE"
              ></path>
              <path
                d="M275.2 768c21.333333 40.533333 68.266667 57.6 108.8 36.266667l352-181.333334c21.333333-10.666667 36.266667-25.6 46.933333-40.533333 36.266667-68.266667 119.466667-228.266667 174.933334-366.933333l-388.266667 185.6-102.4 153.6-145.066667 76.8c-55.466667 27.733333-72.533333 89.6-46.933333 136.533333z"
                fill="#FFB74D"
              ></path>
              <path
                d="M644.266667 64L292.266667 198.4c-14.933333 4.266667-32 21.333333-46.933334 36.266667l-119.466666 160c-21.333333 32-25.6 72.533333-10.666667 108.8 8.533333 21.333333 36.266667 72.533333 66.133333 130.133333C215.466667 597.333333 264.533333 576 320 576c8.533333 0 19.2 0 27.733333 2.133333l-44.8-89.6 98.133334-87.466666h170.666666s330.666667-46.933333 388.266667-185.6L644.266667 64z"
                fill="#FFB74D"
              ></path>
              <path
                d="M388.266667 768c-27.733333 12.8-59.733333 0-70.4-27.733333-12.8-27.733333 0-59.733333 27.733333-70.4 25.6-12.8 68.266667 85.333333 42.666667 98.133333z"
                fill="#FFCDD2"
              ></path>
            </g>
          </svg>

          <div className="px-8 flex flex-column justify-content-center text-center max-w-2-rem">
            <span className="text-3xl text-white text-center">
              Join Us in Saving Lives. Donate Today.
            </span>
            <span className="text-2xl text-black-alpha-90 text-center mt-5">
              Your Support Saves Lives and Brings Hope to Those in Need.
            </span>
            <span className="text-2xl text-black-alpha-90 text-center">
              Be Part of Something Truly Meaningful.
            </span>
          </div>

          <Link to="/pawpal/donate">
            <Button
              label="DONATE NOW"
              type="button"
              className="shadow-2 hover:shadow-8 h-4rem w-15rem px-3 mt-7"
              severity="success"
              size="large"
            ></Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
