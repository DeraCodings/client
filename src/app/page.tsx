// import Header from "./components/Header";
// import Footer from "./Home page/Footer";
// import HeroSection from "./Home page/HeroSection";
// import LastSection from "./Home page/LastSection";
// import SecondSection from "./Home page/SecondSection";
// // import PauseOnHover from "./components/Testimonial";
// import Testimonial from "./Home page/Testimonial";
// import ThirdSection from "./Home page/ThirdSection";

import { baseURL } from "./blog/page";
import Link from "next/link";
import HeroSection from "./components/home page components/Hero";
import MeetTheCoach from "./components/home page components/MeetTheCoach";
import Testimonial from "./components/home page components/Testimonial";

import axios from "axios";
import TrainingPrograms from "./components/home page components/TrainingPrograms";
import WhyChooseUs from "./components/home page components/WhyChooseUs";
import ClosingSection from "./components/home page components/ClosingSection";
import { FaArrowRight } from "react-icons/fa6";
import SliderComponent from "./components/home page components/Slider";

// export default function Home() {
//   return (
//     <div className="relative">
//       {/* <Header /> */}
//       <HeroSection />
//       {/* <div className="flex flex-col items-center">
//         <PauseOnHover />
//       </div> */}
//       <SecondSection />
//       <ThirdSection />
//       <div>
//         <Testimonial />
//       </div>
//       <LastSection />
//       {/* <Footer /> */}
//     </div>
//   );
// }

// const getHomePageData = async () => {
//   // const path = `/api/home-page?populate=deep`;
//   const path =
//     "/api/home-page?populate[blocks][populate][components.hero-section][fields][0]=backgroundImage";
//   const res = await fetch(`${baseURL}${path}`);

//   const data = res.json();

//   return data;
// };

// export default async function Home() {
//   const homePageData = await getHomePageData();
//   console.log(homePageData.blocks);

//   const blocks = homePageData.blocks;

//   return (
//     <div>
//       {blocks.map((_, index:number) => {
//       switch (blocks[index]["__typename"]) {
//         case 'ComponentComponentsHeroSection':
//           return <HeroSection key={blocks[index]["__typename"]} data={blocks[index]} />;

//         case 'ComponentComponentsMeetTheCoach':
//           return <MeetTheCoach key={blocks[index]["__typename"]} data={blocks[index]} />;

//         case 'ComponentComponentsTestimonials':
//           return <Testimonial key={blocks[index]["__typename"]} data={blocks[index]} />;

//         case 'ComponentComponentsTrainingProgram':
//           return <TrainingPrograms key={blocks[index]["__typename"]} data={blocks[index]} />

//         case 'ComponentComponentsWhyChooseUs':
//           return <WhyChooseUs key={blocks[index]["__typename"]} data={blocks[index]} />

//         case 'ComponentComponentsClosingSection':
//           return <ClosingSection key={blocks[index]["__typename"]} data={blocks[index]} />

//         default:
//           return null;
//       }
//     })}
//     </div>
//   );
// }

export interface Image {
  alternativeText: string;
  url: string;
}

// Define the individual block types based on GraphQL query structure
export interface HeroSectionBlock {
  __typename: "ComponentComponentsHeroSection";
  title: string;
  subtitle: string;
  backgroundImage: Image;
  CTA: {
    text: string;
    url: string;
  };
}

export interface MeetTheCoachBlock {
  __typename: "ComponentComponentsMeetTheCoach";
  title: string;
  coachImage: Image;
  description: string;
}

export interface TestimonialBlock {
  __typename: "ComponentComponentsTestimonials";
  playerImage: Image;
  club: string;
  player: string;
  position: string;
  quote: string;
}

export interface TrainingProgramBlock {
  __typename: "ComponentComponentsTrainingProgram";
  Title: string;
  trainingImage: Image;
}

export interface WhyChooseUsBlock {
  __typename: "ComponentComponentsWhyChooseUs";
  content: string;
  reasonSectionImage: Image;
}

export interface ClosingSectionBlock {
  __typename: "ComponentComponentsClosingSection";
  firstText: string;
  secondText: string;
}

// Define a union type for all possible block types

type Block =
  | HeroSectionBlock
  | MeetTheCoachBlock
  | TestimonialBlock
  | TrainingProgramBlock
  | WhyChooseUsBlock
  | ClosingSectionBlock;

interface HomePageData {
  blocks: Block[];
}

async function getHomePageData(): Promise<HomePageData> {
  const graphqlQuery = `
      query{
    homePage {
      blocks{
        __typename
        ... on ComponentComponentsHeroSection{
          title
          subtitle
          backgroundImage {
            alternativeText
            url
          }
          CTA {
            text
            url
          }
        }
        ... on ComponentComponentsMeetTheCoach{
          title
          coachImage:image {
            alternativeText
            url
          }
          description
        }
        ... on ComponentComponentsTrainingProgram{
          Title
          trainingImage:image {
            alternativeText
            url
          }
        }
        ... on ComponentComponentsTestimonials{
          playerImage:image {
            alternativeText
            url
          }
          club
          player
          position
          quote
        }
        ... on ComponentComponentsWhyChooseUs{
          content
          reasonSectionImage:image {
            alternativeText
            url
          }
        }
        ... on ComponentComponentsClosingSection{
          firstText
          secondText
        }
      }
    }
  }
    `;

  const path = "/graphql";

  const res = await axios.post(`${baseURL}${path}`, {
    query: graphqlQuery,
  });

  const data = res.data.data.homePage;

  return data;
}

export default async function Home() {
  const homePageData = await getHomePageData();
  // console.log(homePageData.blocks);

  const blocks = homePageData.blocks;

  return (
    <div>
      {blocks.map((block: Block, index: number) => {
        if (block["__typename"] === "ComponentComponentsTestimonials") {
          // Collect all testimonials
          const testimonials = blocks
            .filter(
              (b: TestimonialBlock) =>
                b["__typename"] === "ComponentComponentsTestimonials"
            )
            .map((testimonial: TestimonialBlock, i: number) => (
              <Testimonial key={`testimonial-${i}`} data={testimonial} />
            ));

          // Render all testimonials in a single div at the first occurrence
          if (
            index ===
            blocks.findIndex(
              (b: TestimonialBlock) =>
                b["__typename"] === "ComponentComponentsTestimonials"
            )
          ) {
            return (
              <SliderComponent key="testimonial-component">{testimonials}</SliderComponent>
            );
          }
          return null;
        }

        if (block["__typename"] === "ComponentComponentsTrainingProgram") {
          // Collect all training programs
          const trainingPrograms = blocks
            .filter(
              (b: TrainingProgramBlock) =>
                b["__typename"] === "ComponentComponentsTrainingProgram"
            )
            .map((program: TrainingProgramBlock, i: number) => (
              <TrainingPrograms key={`training-${i}`} data={program} />
            ));

          // Render all training programs in a single div at the first occurrence
          if (
            index ===
            blocks.findIndex(
              (b: TrainingProgramBlock) =>
                b["__typename"] === "ComponentComponentsTrainingProgram"
            )
          ) {
            return (
              <div key="training-programs-container" className="mb-11 flex items-center justify-center max-h-full">
                <div>
                  <div className="flex flex-col justify-around items-center md:flex-row">
                    <h2 className="text-2xl text-green-600 font-bold">
                      Our Training Programs
                    </h2>
                    <div className="flex items-center gap-4 hover:text-green-600">
                      <Link href="/training-programs">Explore more</Link>
                      <FaArrowRight className="inline-block" />
                    </div>
                  </div>
                  <div className="flex justify-around gap-4 items-center flex-wrap">
                    {trainingPrograms}
                  </div>
                </div>
              </div>
            );
          }
          return null;
        }

        // Render other components as usual
        switch (block["__typename"]) {
          case "ComponentComponentsHeroSection":
            return <HeroSection key={index} data={block} />;

          case "ComponentComponentsMeetTheCoach":
            return <MeetTheCoach key={index} data={block} />;

          case "ComponentComponentsWhyChooseUs":
            return <WhyChooseUs key={index} data={block} />;

          case "ComponentComponentsClosingSection":
            return <ClosingSection key={index} data={block} />;

          default:
            return null;
        }
      })}
    </div>
  );
}
