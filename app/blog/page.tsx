import { Blogs, Footer, Header, Providers, Settings } from "@/components";
import React from "react";

const BlogPage = () => {
  return (
    <main>
      <Providers>
        <Header />
        <Settings />
        <Blogs />
        <Footer top="" />
      </Providers>
    </main>
  );
};

export default BlogPage;
