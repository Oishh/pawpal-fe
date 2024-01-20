import { Button } from "primereact/button";
import bg from "../../resources/zzz.jpg";

export default function Home() {
  return (
    <div
      className="flex align-items-center min-h-screen bg-center bg-no-repeat bg-cover"
      style={{ backgroundImage: `url("${bg}")` }}
    >
      <div className="flex">
        <div className="col-12 md:col-6 p-6 text-center md:text-left flex align-items-center ">
          <section>
            <span
              className="block text-8xl font-bold mb-1 text-blue-900"
              style={{ textShadow: "-1px 2px 0 #ffffff" }}
            >
              Adopt Love. Change a Life.
            </span>
            <span
              className="block text-2xl line-height-3 text-white mb-4"
              style={{ textShadow: "-1px 2px 0 #00008B" }}
            >
              Discover the joy of giving a rescue pet a loving home. Join our
              mission to make second chances happen for countless deserving
              animals. Together, we can turn compassion into action.
            </span>

            <a href="/pawpal/adopt">
              <Button
                label="Adopt Now"
                type="button"
                className="mr-3 p-button-raised"
                severity="info"
              ></Button>
            </a>
            <a href="/pawpal/donate">
              <Button
                label="Donate"
                type="button"
                severity="primary"
                raised
              ></Button>
            </a>
          </section>
        </div>
      </div>
    </div>
  );
}
