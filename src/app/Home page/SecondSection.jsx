import Link from "next/link";
// import ImageBanner from "./resuable components/Image"
import ImageBanner from "../components/resuable components/Image";
import Image from "next/image";
// import Text from "../components/resuable components/Text";

function SecondSection() {
  return (
    <div className="grid grid-cols-1 gap-8 h-full place-items-center mt-32 py-8 mb-16 lg:h-screen lg:grid-cols-5 lg:pr-16 lg:pl-4">
      <div className="flex flex-col items-center justify-center gap-2 px-4 lg:mr-4 lg:col-span-3 lg:w-4/5">
        <h2 className="text-3xl text-green-600 font-extrabold">
          Meet Our Head Coach
        </h2>
        <div className="">
          <p className="paragraph text-base text-justify font-semibold md:w-full">
            <span className="inline-block mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In
              tempore eius minus? Libero accusamus eos eius, in minus aut
              deleniti? Numquam earum doloremque officiis exercitationem ullam
              natus minus tempore ratione quos, iure, dolorem est praesentium?
              Nulla et animi, eligendi veritatis quisquam nisi fugit iusto alias
              illo commodi aliquam a aut! Lorem ipsum dolor sit amet consectetur
              adipisicing elit.
            </span>
            <br />
            <span>
              Quidem temporibus repudiandae perspiciatis earum suscipit ullam
              harum nulla expedita rem dolorem consequatur inventore dicta
              magnam placeat exercitationem, a mollitia sint veritatis?
            </span>
          </p>
        </div>
      </div>
      <div className="w-72 lg:w-2/3 lg:col-span-2">
        <Image
          src="/images/coaching_standing_with_ball.png"
          alt="haed_coach"
          className="rounded-md w-full"
          width={300}
          height={100}
        />
      </div>
    </div>
  );
}

export default SecondSection;
