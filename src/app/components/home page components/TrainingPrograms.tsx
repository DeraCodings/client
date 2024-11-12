import Link from "next/link";
import { TrainingProgramBlock } from "../../page"
import { FaArrowRight } from "react-icons/fa6";
import Image from "next/image";
// import { baseURL } from "../../blog/page";


function TrainingPrograms({data}: {data: TrainingProgramBlock}) {
  // console.log(data);

  const imageUrl = `${process.env.NEXT_BASE_URL}${data.trainingImage.url}`;

  return (
    <div className="">
      <div className="bg-blue-500 w-[400px] my-3 relative">
        <Image alt={data.trainingImage.alternativeText} src={imageUrl} width={300} height={500} className="object-cover w-full h-full" />
        <h3 className="absolute bottom-2 text-center left-12 px-4 py-3 text-xl font-semibold text-white">{data.Title}</h3>
      </div>
    </div>
  )
}

export default TrainingPrograms