"use client";
import React, { useState, useRef, useEffect } from "react";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import { useRouter } from "next/navigation";

const BlogCategories = () => {
  const router = useRouter();
  const categoriesNav = useRef<HTMLDivElement>(null);
  const [scrolling, setScrolling] = useState(false);

  const getCategoryList = useQuery({
    queryKey: ["get", "category list information"],
    queryFn: async () => {
      try {
        const resp = await axios.get(
          "https://abolfazl1devtest.pythonanywhere.com/blog/category/list"
        );
        return resp.data;
      } catch (error) {
        return error;
      }
    },
  });

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
      className={`w-[88%] flex gap-3 md:gap-4 overflow-x-scroll scrollbar-hide h-20 md:h-16 items-center lg:gap-5 xl:gap-6 px-3  text-white`}>
      {getCategoryList.data &&
        getCategoryList.data.map((category: any, index: number) => (
          <button
            onClick={() => {
              router.push(`/blog/categories?category=${category.id}`);
            }}
            key={index}
            type="button"
            className={`rounded-xl px-6 h-9 md:px-8 lg:px-10 flex justify-center items-center font-semibold text-center bg-[#085973] whitespace-nowrap`}>
            {category.title}
          </button>
        ))}
    </nav>
  );
};

export default BlogCategories;
