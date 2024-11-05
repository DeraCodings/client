import Image from "next/image";

function ImageBanner(props) {
  const { src, width, height, alt, className } = props;
  return (
    <div>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={className}
      />
    </div>
  );
}

export default ImageBanner;
