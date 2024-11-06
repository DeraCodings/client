import Link from "next/link";
import { ClosingSectionBlock } from "../../page";

function ClosingSection({ data }: { data: ClosingSectionBlock }) {
  console.log(data);
  return (
    <div className="flex justify-center items-center bg-last-image h-screen bg-cover bg-center px-4 md:px-0">
      <div>
        <div className="text-center text-white">
          <h2 className="font-bold text-3xl">{data.firstText}</h2>
          <h2 className="font-bold text-3xl">{data.secondText}</h2>
        </div>
        <div className="flex justify-center items-center mt-4">
          <form action="" className="flex flex-col gap-3 md:gap-0 p-4 md:flex-row w-4/5">
            <input
              type="text"
              placeholder="Enter your email..."
              className="border w-full md:w-3/4 py-3 pl-2 rounded-lg rounded-l-lg block md:inline md:rounded-r-none focus:outline-none"
            />
            <button
              type="submit"
              className="bg-green-600 text-white text-nowrap px-4 py-2 rounded-lg rounded-r-lg block md:rounded-l-none md:inline"
            >
              Get daily tips
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ClosingSection;
