import Image from "next/image";
// import { baseURL } from "../../blog/page";
import { MeetTheCoachBlock } from "../../page";

function MeetTheCoach({ data }: { data: MeetTheCoachBlock }) {
  const imageUrl = `${process.env.NEXT_BASE_URL}${data.coachImage.url}`;
  // console.log(data.description);
  return (
    <div className="grid grid-cols-1 gap-8 h-full place-items-center mt-32 py-8 mb-16 lg:h-screen lg:grid-cols-5 lg:pr-16 lg:pl-4">
      <div className="flex flex-col items-center justify-center gap-2 px-4 lg:mr-4 lg:col-span-3 lg:w-4/5">
        <h2 className="text-3xl text-green-600 font-extrabold">{data.title}</h2>
        <div className="mx-8">
          <p className="text-xl md:text-base">
            Coach Manuel Dominguez is passionate about helping young girls
            succeed on the soccer field and in life. With over 15 years of
            experience coaching youth soccer, he brings both skill and heart to
            every session. Manuel believes that soccer is more than just a
            game—it&apos;s a powerful way to build confidence, teamwork, and
            resilience. 
            <br /><br />
            His approach is all about creating a positive,
            encouraging space where players feel supported and inspired to reach
            their full potential.
          </p>
        </div>
      </div>
      <div className="w-72 lg:w-2/3 lg:col-span-2">
        <Image
          src={imageUrl}
          alt={data.coachImage.alternativeText}
          className="rounded-full w-full"
          width={300}
          height={100}
        />
      </div>
    </div>
  );
}

export default MeetTheCoach;
