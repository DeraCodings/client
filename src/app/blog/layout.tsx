import type { Metadata, ResolvingMetadata } from 'next'
import { ReactElement, ReactNode } from 'react'
import { baseURL } from '../page'


function BlogLayout({children}) {
  return (
    <div>
      <main className="flex pl-12 pr-0">{children}</main>
    </div>
  );
}

export default BlogLayout;
