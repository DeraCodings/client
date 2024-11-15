import Image from "next/image";
import { baseURL, TestimonialBlock } from "../../page";
// import { baseURL } from "../../blog/page";

function Testimonial({ data }: { data: TestimonialBlock }) {
  // console.log(data);
  const imageUrl = `${baseURL}${data.playerImage.url}`
  return (
    <div className="w-1/2 lg:shadow-none">
      <div className="w-[150px] h-[150px] rounded-full mx-auto">
        <Image
          alt={data.playerImage.alternativeText}
          src={imageUrl}
          height={300}
          width={300}
          className="rounded-full w-full h-full object-cover object-top"
        />
      </div>

      <div>
        <h4 className="font-bold text-base text-center">
          {data.player}
          <br />
          {`(${data.position}, ${data.club})`}
        </h4>
      </div>
      <p className="w-4/5 mx-auto text-center text-xl md:text-base">{data.quote}</p>
    </div>
  );
}

export default Testimonial;
