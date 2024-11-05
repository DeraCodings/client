import Image from "next/image";
import { trainingProgramData } from "../components/resuable components/Cards";
import ImageBanner from "../components/resuable components/Image";
import Text from "../components/resuable components/Text";
import Link from "next/link";


function ThirdSection() {
  return (
    <div className="h-full lg:h-screen px-4 py-8 mb-24">
      <h2 className="text-green-600 font-bold text-center text-2xl my-3 md:text-3xl md:text-left">Explore Our Training Programs</h2>
      <div className="grid grid-cols-1 place-items-center gap-5 lg:grid-cols-3 lg:gap-3">
        {trainingProgramData.map((program, index) => {
          return (
            <div key={index} className="card-container w-72 shadow-lg rounded-md md:w-4/5 md:shadow-sm">
              <div className="image-container md:">
                <Image
                  src={program.img}
                  alt={program.title}
                  width={400}
                  height={400}
                  className="w-full aspect-auto"
                />
              </div>
              <div className="flex flex-col gap-2 mt-7 px-3">
                <h3 className="font-semibold">
                  {program.title}
                </h3>
                <p className="text-sm">{program.description}</p>
                <div className="mt-7 mb-4">
                  <Link
                    className="px-3 py-2 bg-green-600 rounded-lg text-center text-sm font-semibold text-white"
                    href="#"
                  >
                    Learn more
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ThirdSection;
