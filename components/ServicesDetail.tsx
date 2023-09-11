"use client";
import { useState } from "react";
import Image from "next/image";
import { FaAngleDown } from "react-icons/fa";

const ServicesDetail = ({ title, imageSrc, description }: ServicesDetail) => {
  const [showServiceDetaile, setShowServiceDetaile] = useState(false);
  return (
    <details className="w-[85vw]  max-sm sm:w-[550px] md:w-[600px] lg:w-[700px] xl:w-[850px] 2xl:w-[1050px] ">
      <summary
        onClick={() => {
          setTimeout(() => {
            setShowServiceDetaile(!showServiceDetaile);
          }, 100);
        }}
        className="relative hover:bg-[#212B36] transition-all ease-in duration-20000 flex justify-between px-6 sm:px-8 md:px-12 items-center bg-[#1E212B] h-[87px] rounded-xl font-extrabold">
        <h6 className="sm:text-lg md:text-xl xl:font-bold font-semibold text-center">
          {title}
        </h6>
        <span className="mt-2 text-3xl">
          <FaAngleDown />
        </span>
      </summary>
      <div
        className={`${
          showServiceDetaile ? "opacity-100" : "opacity-0"
        } p-6 flex flex-col xl:flex-row bg-[#1c212a] items-center gap-9 rounded-lg transition-all ease-in duration-200 w- -mt-2`}>
        <Image
          src={imageSrc}
          alt="Services Details"
          width="350"
          height="350"
          className="w-5/6 xl:w-[350px] rounded-xl"
        />
        <p className="sm:text-lg font-[500] 2xl:font-semibold p-3">
          {description}
        </p>
      </div>
    </details>
  );
};

export default ServicesDetail;
