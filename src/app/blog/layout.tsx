import type { Metadata, ResolvingMetadata } from 'next'
import { ReactElement, ReactNode } from 'react'
import { baseURL } from '../page'


function BlogLayout({children}) {
  return (
    <div>
      <main className="flex justify-center items-center px-7">{children}</main>
    </div>
  );
}

export default BlogLayout;
