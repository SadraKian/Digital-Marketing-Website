"use client";
import { useSearchParams } from "next/navigation";

import Providers from "@/components/shared/Providers";

import { Footer, Header, Settings } from "@/components";
import { BlogPost } from "@/components/index";

import { articlesData } from "@/data/articles";
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
