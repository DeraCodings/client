import Link from "next/link";
import { ClosingSectionBlock } from "../../page";
import SubscriberForm from "./subscriberForm";

function ClosingSection({ data }: { data: ClosingSectionBlock }) {
  console.log(data);
  return (
    <div className="flex justify-center items-center bg-last-image h-screen bg-cover bg-center px-4 md:px-0">
      <div>
        <div className="text-center text-white">
          <h2 className="font-bold text-3xl">{data.firstText}</h2>
          <h2 className="font-bold text-3xl">{data.secondText}</h2>
        </div>
        <SubscriberForm />
        {/* <iframe src="https://cdn.forms-content-1.sg-form.com/4c493d82-9ee6-11ef-b3ee-d6fa7671c82f"/> */}
      </div>
    </div>
  );
}

export default ClosingSection;
