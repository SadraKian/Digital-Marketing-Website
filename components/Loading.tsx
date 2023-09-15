"use client";
import { themeContext } from "@/components/Providers";
import Image from "next/image";
import { useContext } from "react";

const Loading = () => {
  const { isThemeDark } = useContext(themeContext);
  const numbers = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];
  return (
    <section className="relative w-screen h-screen ">
      {numbers.map((number) => (
        <span
          className={`absolute top-0 left-0 rotate-[${
            180 * number
          }] before:content-[""] before:w-4 before:h-4 rounded-[50% ] before:absolute before:top-0 before:left-0 span-shadow`}
        ></span>
      ))}
    </section>
  );
};

export default Loading;
