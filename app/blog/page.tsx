import { Blogs, Footer, Header, Providers, Settings } from "@/components";
import React from "react";

const BlogPage = () => {
  return (
    <main>
      <Providers>
        <Settings />
        <Blogs />
      </Providers>
    </main>
  );
};

export default BlogPage;
