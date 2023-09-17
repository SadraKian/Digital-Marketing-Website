import { Blog, Footer, Header, Providers, Settings } from "@/components";
import React from "react";

const BlogPage = () => {
  return (
    <main>
      <Providers>
        <Settings />
        <Blog />
      </Providers>
    </main>
  );
};

export default BlogPage;
