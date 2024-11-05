function BlogLayout({ children }) {
  return (
    <div>
      <main className="flex justify-center items-center px-7">{children}</main>
    </div>
  );
}

export default BlogLayout;
