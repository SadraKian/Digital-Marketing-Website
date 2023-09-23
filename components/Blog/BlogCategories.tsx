"use client";
import React, { useContext, useState, useRef, useEffect } from "react";
import { themeContext } from "../shared/Providers";
import { articlesCategories } from "@/data/articles";

const BlogCategories = () => {
  const { presets } = useContext(themeContext);
  const articlesCategoriesData = JSON.parse(articlesCategories);
  const categoriesNav = useRef<HTMLDivElement>(null);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleWheelScroll = (event: WheelEvent) => {
      event.preventDefault();
      if (scrolling && categoriesNav.current) {
        const scrollSpeed = 20; // Adjust the scroll speed as needed
        const scrollDirection = event.deltaY > 0 ? 1 : -1; // Detect scroll direction
        // Calculate the new scroll position
        categoriesNav.current.scrollLeft += scrollDirection * scrollSpeed;

        // Prevent the default scroll behavior for the entire page
      }
    };

    if (categoriesNav.current) {
      categoriesNav.current.addEventListener("wheel", handleWheelScroll);
    }

    return () => {
      if (categoriesNav.current) {
        categoriesNav.current.removeEventListener("wheel", handleWheelScroll);
      }
    };
  }, [scrolling]);

  const handleMouseEnter = () => {
    setScrolling(true);
  };

  const handleMouseLeave = () => {
    setScrolling(false);
  };

  return (
    <nav
      ref={categoriesNav}
      onMouseEnter={(e) => {
        handleMouseEnter();
      }}
      onMouseLeave={handleMouseLeave}
      aria-label="blog categories nav"
      className={`relative top-[15vh] flex gap-3 md:gap-4 overflow-x-scroll scrollbar-hide h-20 md:h-16 items-center lg:gap-5 xl:gap-6 px-3 md:px-5 lg:px-7 text-white`}
    >
      {articlesCategoriesData.map((category: string, index: number) => (
        <button
          key={index}
          type="button"
          className={`rounded-xl px-6 h-9 md:px-8 lg:px-10 font-semibold text-center bg-[#085973] whitespace-nowrap`}
        >
          {category}
        </button>
      ))}
    </nav>
  );
};

export default BlogCategories;
