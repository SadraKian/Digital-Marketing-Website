"use client";
import Image from "next/image";
import { useContext } from "react";
import { themeContext } from "../shared/Providers";

const AboutHero = () => {
  const { isThemeDark, presets } = useContext(themeContext);
  return (
    <section className="flex flex-col md:flex-row w-full items-center lg:gap-7 2xl:gap-10 md:justify-center">
      <img
        src={`${
          isThemeDark
            ? "/assets/images/lightWebsite.png"
            : "/assets/images/darkWebsite.png"
        }`}
        alt=""
        width="50"
        height="50"
        className="md:order-1 w-3/4 sm:w-2/3 md:w-1/2 xl:w-2/5"
      />
      <div className="w-4/5 sm:w-3/4 md:w-2/5 2xl:w-[37%] flex flex-col justify-between items-center text-center lg:text-left gap-5 md:gap-8 xl:gap-10 ">
        <h1
          className={`font-extrabold text-2xl sm:text-3xl md:text-4xl xl:text-5xl text-[#00AB55] w-[90%]`}
        >
          Rasam
        </h1>
        <h2
          className={`${
            isThemeDark ? "text-whute" : "text-black"
          } font-bold text-lg sm:text-xl md:text-2xl xl:text-3xl  w-[90%]`}
        >
          Digital marketing group
        </h2>
        <p
          className={` ${
            isThemeDark ? "text-whute" : "text-black"
          } w-[90%] font-semibold text-[18px] lg:text-[22px] leading-8 lg:leading-9 `}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum veniam
          animi autem ratione neque velit ipsa quam pariatur? Ea ipsam quod vel
          impedit perferendis aliquam labore non ducimus officiis quis? animi
          autem ratione neque velit ipsa quam pariatur? Ea ipsam quod vel
        </p>
      </div>
    </section>
  );
};

export default AboutHero;
