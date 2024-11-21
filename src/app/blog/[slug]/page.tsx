import { type BlocksContent } from "@strapi/blocks-react-renderer";

import { BlogPost } from "../page";
import BlockRendererClient from "../../components/resuable components/BlockRendererClient";
import Image from "next/image";
import { baseURL } from "../../page";

async function fetchPostBySlug(slug: string) {
  const res = await fetch(
    `${baseURL}/api/blog-posts?filters[slug][$eq]=${slug}&populate=coverImage`,
    { cache: "no-cache" }
  );
  if (!res.ok) throw new Error("Failed to fetch the post");

  const postData = await res.json();
  return postData.data; // Assuming the slug is unique and returns a single post
}

async function BlogPage({ params }) {
  const post: BlogPost = await fetchPostBySlug(params.slug);
  // console.log(post);

  const content: BlocksContent = post[0].content;

  return (
    <div>
      <main className="flex justify-center items-center pb-16 pt-8">
        <div className="w-4/6">
          <h1 className="text-4xl font-extrabold">{post[0].title}</h1>
          <p className="my-4">
            <span className="font-semibold">
              Author: <span className="font-normal">{post[0].author}</span>
            </span>
            <br />
            <span className="font-semibold">
              Published on:{" "}
              <span className="font-normal italic">
                {post[0].datePublished}
              </span>
            </span>
          </p>
          <Image
            width={1240}
            height={396}
            src={`${baseURL}${post[0].coverImage.url}`}
            alt={post[0].coverImage.alternativeText}
            className="w-[700px] md:w-[1240px] block my-6"
          />
          <BlockRendererClient content={content} />
        </div>
      </main>
    </div>
  );
}

export default BlogPage;
