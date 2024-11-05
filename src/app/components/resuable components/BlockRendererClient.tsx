"use client";

import {
  BlocksRenderer,
  type BlocksContent,
} from "@strapi/blocks-react-renderer";
import Image from "next/image";

function replaceLocalhost(url: string) {
  return url.replace(/localhost/g, "127.0.0.1");
}

export function BlockRendererClientUpdatedParagraph({
  content,
}: {
  readonly content: BlocksContent;
}) {
  if (!content) return null;
  return (
    <BlocksRenderer
      content={content}
      blocks={{
        paragraph: ({ children }) => (
          <p className="w-1/2 md:w-[75ch] leading-relaxed text-justify">
            {children}
          </p>
        ),
      }}
    />
  );
}

export default function BlockRendererClient({
  content,
}: {
  readonly content: BlocksContent;
}) {
  if (!content) return null;
  return (
    <BlocksRenderer
      content={content}
      blocks={{
        image: ({ image }) => {
          //   console.log(image);
          const modifiedUrl = replaceLocalhost(image.url);
          return (
            <div className="flex justify-center items-center py-6 my-4">
              <Image
                src={modifiedUrl}
                width={300}
                height={300}
                alt={image.alternativeText || ""}
              />
            </div>
          );
        },
        paragraph: ({ children }) => (
          <p className="max-w-[130ch] text-justify my-3">{children}</p>
        ),
        heading: ({ children, level }) => {
          switch (level) {
            case 1:
              return <h1 className="text-4xl font-extrabold">{children}</h1>;

            case 2:
              return <h2 className="text-3xl font-bold">{children}</h2>;

            case 3:
              return <h3 className="text-2xl font-semibold">{children}</h3>;

            default:
              return <h1 className="text-4xl font-extrabold">{children}</h1>;
          }
        },
      }}
    />
  );
}

export function RendererForHomePage({
  content,
}: {
  content: BlocksContent;
}) {
  if (!content) {
    return null;
  }

  return <BlocksRenderer content={content} blocks={{
    paragraph: ({children}) => <p className="text-wrap w-[60ch] mb-4 leading-relaxed text-base text-justify md:w-full">{children}</p>
  }} />;
}
