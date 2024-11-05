import Link from "next/link";

function Text(props) {
  const { heading, subtitle, className, cta } = props;
  function toSentenceCase(sentence) {
    const str =
      sentence &&
      sentence
        .match(
          /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g
        )
        .join(" ");
    return str.slice(0, 1).toUpperCase() + str.slice(1);
  }
  return (
    <div className={className}>
      <h2 className="font-bold text-2xl">{heading}</h2>
      <p className="text-wrap text-gray-700">{toSentenceCase(subtitle)}</p>
      <div className="pt-4">
        <Link href="#" className="bg-blue-700 text-white py-3 px-4 rounded-md">
          {cta}
        </Link>
      </div>
    </div>
  );
}

export default Text;
