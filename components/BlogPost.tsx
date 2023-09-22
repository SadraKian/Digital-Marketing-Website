"use client";
import { useContext } from "react";
import { themeContext } from "./Providers";
const BlogPost = ({ post }: { post: Article }) => {
  let { isThemeDark } = useContext(themeContext);
  let theme = isThemeDark
    ? {
        color: "white",
        background:
          "linear-gradient(to bottom left, #454b53 0%,#21272f 30%,#161c24 100%)",
      }
    : {
        color: "black",
        backgroundColor: "#f7ffff",
        backgroundImage: "linear-gradient(225deg,  #bfdad6, #d6eae1)",
      };
  return (
    <section
      style={theme}
      className="flex items-center justify-center min-h-screen w-full relative">
      <article className="flex flex-col w-5/6 gap-5 items-center">
        <h1>{post.title}</h1>
        <p>{post.intro}</p>
      </article>
    </section>
  );
};

export default BlogPost;
