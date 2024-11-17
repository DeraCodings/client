import Link from "next/link";
import { baseURL, HeroSectionBlock } from "../../page";
import { Text } from "../resuable components/text";
// import { baseURL } from "../../blog/page";
// import { Text } from "../../Home page/HeroSection";


function HeroSection({ data }: { data: HeroSectionBlock }) {
  const imageUrl = `${baseURL}${data.backgroundImage.url}`;

  return (
    <div
      className="h-screen flex justify-center items-center bg-hero-image"
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: "cover",
      }}
    >
      <div className="">
        <Text
          title={data.title}
          subtitle={data.subtitle}
          url="/book-session"
          cta={data.CTA.text}
        />
      </div>
    </div>
  );
}

export default HeroSection;
