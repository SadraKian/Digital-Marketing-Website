"use client";
import { useContext } from "react";
import { themeContext } from "../shared/Providers";

import { Post } from "../index";
const BlogPost = ({ post }: { post: Article }) => {
  let { isThemeDark, presets } = useContext(themeContext);
  let theme = isThemeDark
    ? {
        color: "white",
      }
    : {
        color: "black",
      };
  return (
    <section
      style={theme}
      className="flex items-center relative top-[20vh] justify-center  w-full"
    >
      <Post post={post} isThemeDark={isThemeDark} presets={presets} />
    </section>
  );
};

export default BlogPost;
