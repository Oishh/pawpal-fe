import bg from "../../resources/donate bg.jpg";
import gcash from "../../resources/gcash_qr.jpg";
import { Card } from "primereact/card";

export default function Donate() {
  const header = <img alt="Card" src={gcash} />;

  return (
    <div
      className="flex min-h-screen bg-center bg-no-repeat bg-cover"
      style={{ backgroundImage: `url("${bg}")` }}
    >
      <div className="flex flex-column justify-center py-4 px-8 mx-8">
        <div className="px-8">
          <span
            className="block text-4xl font-bold text-blue-900 text-center"
            style={{ textShadow: "-2px 2px 0 #ffffff" }}
          >
            Your help goes a long way for the food, medicine, and upkeep of our
            rescues' shelter. Both in kind and cash donations are welcome!
          </span>
        </div>
        <div className="px-8 pt-6">
          <span
            className="block text-2xl text-blue-900 text-center"
            style={{ textShadow: "-1px 2px 0 #ffffff" }}
          >
            Our rescues will be happy to accept your donations via:
          </span>
        </div>
        <div className="card flex justify-content-center pt-4">
          <Card header={header} className="md:w-25rem">
            <p className="m-0 text-center">
              All of the donations will go to the rescues' shelter.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}
