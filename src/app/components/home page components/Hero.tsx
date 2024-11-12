import Link from "next/link";
import { HeroSectionBlock } from "../../page";
// import { baseURL } from "../../blog/page";
import { Text } from "../../Home page/HeroSection";

function HeroSection({ data }: { data: HeroSectionBlock }) {
  const imageUrl = `${process.env.NEXT_BASE_URL}${data.backgroundImage.url}`;

  return (
    <div
      className="h-screen flex justify-center items-center"
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: "cover",
      }}
    >
      <div className="">
        <Text
          title={data.title}
          subtitle={data.subtitle}
          url={data.CTA.url}
          cta={data.CTA.text}
        />
      </div>
    </div>
  );
}

export default HeroSection;
