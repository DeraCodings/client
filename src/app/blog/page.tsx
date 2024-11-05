// import React from 'react'

export interface BlogPost {
  id: number;
  documentId: string;
  title: string;
  author: string;
  datePublished: string;
  content: Array<object>;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  slug: string;
  coverImage: object;
}

import Image from "next/image";
import Link from "next/link";

export const baseURL = "http://127.0.0.1:1337";

async function getPosts() {
  const path = "/api/blog-posts";

  const url = new URL(path, baseURL);

  url.searchParams.append("populate", "coverImage");

  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch blog posts");

  const data = await res.json();
  // console.log(typeof data);

  return data;
}

async function BlogPage() {
  const blogPosts = await getPosts();
  // console.log(blogPosts.data);

  return (
    <div>
      <h1 className="text-4xl text-green-600 font-bold text-center my-5 py-6">Explore our catalog</h1>
      {/* <div>
        <div className="w-full h-[100px]">
          <Image
            width={3000}
            height={396}
            src={`${baseURL}${blogPosts.data[0].coverImage.url}`}
            alt={blogPosts.data[0].coverImage.alternativeText}
            className="w-full object-cover"
          />
        </div>
        <div>
          <h2>{blogPosts.data[0].title}</h2>
          <div>
            <Link href={`/blog/${blogPosts.data[0].slug}`}>Continue reading...</Link>
          </div>
        </div>
      </div> */}
      <div className="flex gap-6 items-center flex-wrap">
        {blogPosts.data.map((post) => (
          <div
            key={post.documentId}
            className="shadow-xl rounded-xl w-[300px] h-[320px] my-6"
          >
            <Image
              src={`${baseURL}${post.coverImage.url}`}
              alt={post.coverImage.alternativeText}
              width={300}
              height={300}
              className="w-full h-1/2 object-cover rounded-t-xl"
            />
            <div className="py-6 px-2 flex flex-col gap-5">
              <h2 className="font-semibold">{post.title}</h2>
              <div>
                <Link
                  href={`/blog/${post.slug}`}
                  className=" bg-green-600 text-white py-2 px-3 rounded-md"
                >
                  Read
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogPage;
