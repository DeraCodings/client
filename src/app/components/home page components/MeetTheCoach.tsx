import { Nunito_Sans } from "next/font/google"

import Image from "next/image";
// import { baseURL } from "../../blog/page";
import { baseURL, MeetTheCoachBlock } from "../../page";

const nunitoSans = Nunito_Sans({
  weight: "500",
  subsets: ["latin"]
});

function MeetTheCoach({ data }: { data: MeetTheCoachBlock }) {
  const imageUrl = `${baseURL}${data.coachImage.url}`;
  // console.log(data.description);
  return (
    <div className="grid grid-cols-1 gap-8 h-full place-items-center mt-32 py-8 mb-16 lg:grid-cols-5 lg:pr-16 lg:pl-4">
      <div className="flex flex-col items-center justify-center gap-2 px-4 lg:mr-4 lg:col-span-3 lg:w-4/5">
        <h2 className="text-3xl text-green-600 font-extrabold text-center" style={{fontFamily: `${nunitoSans.style.fontFamily}`, fontWeight: `${nunitoSans.style.fontWeight}`}}>{data.title}</h2>
        <div className="mx-8">
          <p className="text-xl md:text-base">
            {data.description}
          </p>
        </div>
      </div>
      <div className="w-72 lg:w-2/3 lg:col-span-2">
        <Image
          src={imageUrl}
          alt={data.coachImage.alternativeText}
          className="rounded-md w-full h-full"
          width={800}
          height={500}
        />
      </div>
    </div>
  );
}

export default MeetTheCoach;
