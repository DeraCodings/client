import Image from "next/image";
import { baseURL, WhyChooseUsBlock } from "../../page";
import { Nunito_Sans } from "next/font/google";
// import { baseURL } from "../../blog/page";

const nunitoSans = Nunito_Sans({
  weight: "500",
  subsets: ["latin"]
});

function WhyChooseUs({ data }: { data: WhyChooseUsBlock }) {
  // console.log(data);
  const imageUrl = `${baseURL}${data.image.url}`;
  return (
    <div className="mx-6 px-3 my-4 py-11 mb-9">
      <h2 className="text-2xl font-bold text-center text-green-600 mb-8 md:text-3xl md:font-extrabold" style={{fontFamily: `${nunitoSans.style.fontFamily}`, fontWeight: `${nunitoSans.style.fontWeight}`}}>Why Choose Us</h2>
      <div className="grid grid-cols-1 gap-2 lg:grid-cols-5">
        <div className="col-span-3 flex justify-center items-center">
          <Image
            alt={data.image.alternativeText}
            src={imageUrl}
            width={700}
            height={500}
            className="w-4/5 h-full rounded-2xl"
          />
        </div>
        <div className="col-span-2 w-full px-4 flex justify-center items-center">
          <p className="text-xl text-left md:text-base lg:text-justify">
            {data.content}
          </p>
        </div>
      </div>
    </div>
  );
}

export default WhyChooseUs;
