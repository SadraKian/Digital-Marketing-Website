"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa";

const ServicesDetails = () => {
  const [showServiceDetails1, setShowServiceDetails1] = useState(false);
  return (
    <article className="bg-[#151822] w-full min-h-screen pt-20 flex flex-col items-center gap-7">
      <details className="w-[280px]">
        <summary
          onClick={(e) => {
            setTimeout(() => {
              setShowServiceDetails1(!showServiceDetails1);
            }, 100);
          }}
          className="flex justify-center bg-[#1E212B] h-24 items-center rounded-lg  font-extrabold text-3xl"
        >
          <h6 className="text-xl font-semibold">Digital Marketing</h6>
          <FaAngleDown />
        </summary>
        <div
          className={`${
            showServiceDetails1 ? "opacity-100" : "opacity-0"
          } p-6 flex flex-col bg-[#1c212a] items-center gap-9 rounded-lg transition-all ease-in duration-200 w- -mt-2`}
        >
          <Image
            src="/assets/images/services.svg"
            alt="Services Details"
            width="175"
            height="175"
          />
          At Rasam, we excel in the dynamic realm of digital marketing. Our
          comprehensive suite of digital marketing services is designed to
          propel your brand into the digital spotlight. Whether it's crafting
          engaging social media campaigns, optimizing your website for search
          engines, or strategizing targeted email marketing, we've got you
          covered. Harness the power of digital marketing with Rasam and watch
          your online presence soar.
        </div>
      </details>
    </article>
  );
};

export default ServicesDetails;
