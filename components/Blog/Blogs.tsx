"use client";
import { useContext } from "react";
import { themeContext } from "../shared/Providers";
import { BlogCategories, BlogHero, Footer, Header } from "..";

const Blogs = () => {
  const { isThemeDark, presets } = useContext(themeContext);
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
    <section style={theme} className={`flex flex-col`}>
      <Header />
      <BlogCategories />
      <Footer />
    </section>
  );
};

export default Blogs;
