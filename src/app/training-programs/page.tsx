import Image from "next/image";
import { baseURL } from "../blog/page";
import Link from "next/link";

export interface TrainingProgram {
  id: number;
  documentId: string;
  title: string;
  description: Array<object>;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
  slug: string;
  coverImage: Object;
}

async function getTrainingPrograms() {
  const path = "/api/training-programs";

  const url = new URL(path, baseURL);

  url.searchParams.append("populate", "coverImage");

  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch training programs");

  const data = await res.json();
  // console.log(typeof data);

  return data;
}

async function TrainingProgramsPage() {
  const trainingPrograms = await getTrainingPrograms();
  console.log(trainingPrograms);
  return (
    <div className="min-h-screen max-h-full">
      <h1 className="text-center my-6 py-4 text-4xl text-green-600 font-extrabold">
        Our Training Programs
      </h1>
      <div className="mx-11">
        <div className="flex gap-3 items-center flex-wrap justify-evenly">
          {trainingPrograms.data.map((program) => {
            return (
              <div
                key={program.documentId}
                className="mb-8 shadow-sm rounded-md"
              >
                <Image
                  width={400}
                  height={500}
                  src={`${baseURL}${program.coverImage.url}`}
                  alt={program.coverImage.alternativeText}
                  className="rounded-t-md"
                />
                <div className="pl-3 pb-4 mt-3">
                  <h3 className="text-xl font-semibold">{program.title}</h3>
                  <div className="mt-4 py-2">
                    <Link
                      href={`/training-programs/${program.slug}`}
                      className="bg-green-600 text-white py-2 px-3 rounded-md text-center"
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
    </div>
  );
}

export default TrainingProgramsPage;
