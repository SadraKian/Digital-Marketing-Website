"use client";
import { useContext } from "react";
import {
  ArticlesHighlights,
  ServicesDetailsList,
  ServicesCardsList,
} from "../index";
import { themeContext } from "../shared/Providers";
const Services = () => {
  let { isThemeDark } = useContext(themeContext);
  let theme = isThemeDark
    ? {
        color: "white",
      }
    : {
        color: "black",
        backgroundImage: "linear-gradient(to left,#267871 35%, #135058 100%)",
      };
  return (
    <section
      id="services-section"
      style={theme}
      className="relative top-[150vh]  z-30 bg-[#161C24] flex flex-col items-center py-10  gap-12 lg:gap-16 w-full"
    >
      <div className="flex flex-col gap-5 items-center">
        <div
          className={`${
            isThemeDark ? "bg-gray-600" : "bg-blue-100"
          } w-16 rounded-3xl  h-1`}
        />
        <h3
          className={`${
            isThemeDark ? "text-gray-600" : "text-blue-100"
          } font-semibold`}
        >
          RASAM
        </h3>
      </div>

      <h3
        className={`${
          isThemeDark ? "text-white" : "text-blue-100"
        } font-semibold text-lg md:text-4xl drop-shadow-[0_0.25px_0.5px_whitesmoke]`}
      >
        What Rasam Helps you with
      </h3>

      <ServicesCardsList />

      <ServicesDetailsList />

      <ArticlesHighlights />
    </section>
  );
};

export default Services;
