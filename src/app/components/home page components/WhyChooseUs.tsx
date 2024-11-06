import Image from "next/image";
import { WhyChooseUsBlock } from "../../page";
import { baseURL } from "../../blog/page";
import { ThirdSectionRenderer } from "../resuable components/BlockRendererClient";

function WhyChooseUs({ data }: { data: WhyChooseUsBlock }) {
  // console.log(data);
  const imageUrl = `${baseURL}${data.reasonSectionImage.url}`;
  return (
    <div className="mx-6 px-3">
      <h2 className="text-2xl font-bold text-center mb-4 md:text-3xl md:font-extrabold">Why Choose Us</h2>
      <div className="grid grid-cols-1 gap-2 md:grid-cols-5">
        <div className="col-span-3">
          <Image
            alt={data.reasonSectionImage.alternativeText}
            src={imageUrl}
            width={700}
            height={500}
            className="w-4/5 h-full rounded-full"
          />
        </div>
        <div className="col-span-2 w-full px-4 flex justify-center items-center">
          <p className="text-xl md:text-base text-justify">
            At Coach Manuel Dominguez’s training sessions, every player is
            valued for their unique strengths and potential. Manuel believes
            that the best coaching starts with understanding each player’s
            abilities and meeting them right where they are.<br /><br /> Instead of a
            one-size-fits-all approach, Manuel tailors each session to fit the
            needs of every player, celebrating their strengths while encouraging
            growth and confidence in all aspects of their game.
          </p>
        </div>
      </div>
    </div>
  );
}

export default WhyChooseUs;
