import type { Metadata, ResolvingMetadata } from 'next'
import { ReactElement, ReactNode } from 'react'
import { baseURL } from '../page'
 
type Props = {
  params: Promise<{ slug: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
  children?: ReactNode
}
 
export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const slug = (await params).slug
 
  // fetch data
  const product = await fetch(`${baseURL}/${slug}`).then((res) => res.json())
 
  // optionally access and extend (rather than replace) parent metadata
  // const previousImages = (await parent).openGraph?.images || []
 
  return {
    title: product.title,
    // openGraph: {
    //   images: ['/some-specific-page-image.jpg', ...previousImages],
    // },
    description: product.description
  }
}
 
// export default function Page({ params, searchParams }: Props) {}


function BlogLayout({ children, params, searchParams }: Props) {
  return (
    <div>
      <main className="flex justify-center items-center px-7">{children}</main>
    </div>
  );
}

export default BlogLayout;
