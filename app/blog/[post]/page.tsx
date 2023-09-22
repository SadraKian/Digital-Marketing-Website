"use client";
import { useSearchParams } from "next/navigation";
import { useContext, useEffect, useState } from "react";

import Providers from "@/components/Providers";

import { Footer, Header, Settings } from "@/components";
import { articlesData } from "@/data/articles";
import BlogPost from "@/components/BlogPost";
const Post = () => {
  const searchParams = useSearchParams();

  let postId = searchParams.get("id");
  let id = Number.parseInt(postId as string);

  const articles = JSON.parse(articlesData);

  const post = articles.find((post: Article) => post.id == id);

  return (
    <Providers>
      <Settings />
      <Header />
      <BlogPost post={post} />
      <Footer />
    </Providers>
  );
};

export default Post;
