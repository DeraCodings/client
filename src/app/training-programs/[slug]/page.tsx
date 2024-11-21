import { TrainingProgram } from "../page";
import Image from "next/image";
import Link from "next/link";
import { baseURL } from "../../page";


async function getTrainingProgramBySlug(slug: string) {
  const res = await fetch(
    `${baseURL}/api/training-programs?filters[slug][$eq]=${slug}&populate=coverImage`,
    { cache: "no-cache" }
  );
  
  if (!res.ok) throw new Error("Failed to fetch the post");

  const trainingProgramData = await res.json();
  return trainingProgramData.data; // Assuming the slug is unique and returns a single post
}

async function TrainingProgramPage({ params }) {
  const trainingProgram: TrainingProgram = await getTrainingProgramBySlug(
    params.slug
  );
  // console.log(trainingProgram);

  const content = trainingProgram[0].description;

  return (
    <div className="">
      <main className="flex justify-center items-center px-11 py-11">
        <div>
          <div className="flex justify-center items-center mb-6">
            <Image
              width={650}
              height={300}
              src={`${baseURL}${trainingProgram[0].coverImage.url}`}
              alt={trainingProgram[0].coverImage.alternativeText}
              className="w-[350px] h-auto md:w-[650px]"
            />
          </div>
          {/* <BlockRendererClientUpdatedParagraph content={content} /> */}
          {/* <BlockRendererClient content={content} /> */}
          <p>{content}</p>
          <div className="my-8">
            <Link
              href="/book-session"
              className="bg-green-600 text-white py-2 px-3 rounded-md text-center"
            >
              Start training today
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

export default TrainingProgramPage;
