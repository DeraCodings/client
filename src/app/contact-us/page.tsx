
// import { baseURL } from "../blog/page";
import Image from "next/image";
import ContactForm from "./contactForm";
import { baseURL } from "../page";

interface contactPageData {}
const api = `${baseURL}/graphql`;

const query = `query{
contactUs {
  __typename
  ... on ContactUs {
    content{
      ... on ComponentSubComponentsImage {
        image {
          alternativeText
          url
        }
      }
      ... on ComponentSubComponentsText {
        headingText
        subtitle
      }
    }
  }
}
}`;

async function fetchContactPageData() {

  const res = await fetch(api, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query: query }),
    cache: "no-cache",
  });

  if(!res.ok) throw new Error("An error occurred while fetching the image");

  const data = await res.json();

  return data;
}

async function ContactUsPage() {
  const contactData = await fetchContactPageData();
  const contactPageData = contactData.data.contactUs.content;

  console.log(contactPageData);

  const imageData = contactPageData[0].image;
  const imageUrl = `${baseURL}${imageData.url}`;

  return (
    <div className="min-h-fit max-h-full grid grid-cols-5 my-8 px-12">
      <div className="hidden lg:block col-span-3 h-full rounded-l-lg">
        <Image
          alt={imageData.alternativeText}
          src={imageUrl}
          width={500}
          height={1000}
          className="h-full aspect-auto w-full rounded-l-2xl"
        />
      </div>
      <div className="col-span-5 lg:col-span-2 px-11 h-full flex justify-center items-center py-4">
        <ContactForm contactPageData={contactPageData} />
      </div>
    </div>
  );
}

export default ContactUsPage;
