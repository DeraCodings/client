import Link from "next/link";

interface TextArgs {
  title: string;
  subtitle: string;
  url: string;
  cta: string;
}

function HeroSection() {
  return (
    <div className="h-screen bg-cover flex justify-center items-center bg-hero-image">
      <div className="">
        {/* <Text /> */}
      </div>
    </div>
  );
}

export function Text({title, subtitle, url, cta}: TextArgs) {
  return (
    <div className="flex flex-col gap-2 items-center justify-center">
      <h1 className="text-white text-3xl text-center font-extrabold">
        {title}
      </h1>
      <p className="text-sm font-light text-white w-3/4 text-center">
        {subtitle}
      </p>
      <div className="mt-5">
        <Link
          href={url}
          className="bg-green-600 text-white rounded-sm py-4 px-4 font-bold"
        >
          {cta}
        </Link>
      </div>
    </div>
  );
}

export default HeroSection;
