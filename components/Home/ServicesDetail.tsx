"use client";
import { useContext, useState } from "react";
import Image from "next/image";
import { FaAngleDown } from "react-icons/fa";
import { themeContext } from "../shared/Providers";

interface ServicesDetailProps {
  servicesDetailInfo: ServicesDetail;
}

const ServicesDetail = ({ servicesDetailInfo }: ServicesDetailProps) => {
  const [showServiceDetaile, setShowServiceDetaile] = useState(false);
  const { title, imageSrc, description } = servicesDetailInfo;
  let { isThemeDark } = useContext(themeContext);
  return (
    <details className="w-[85vw]  sm:w-[550px] md:w-[600px] lg:w-[700px] xl:w-[850px] 2xl:w-[1000px] ">
      <summary
        onClick={() => {
          setTimeout(() => {
            setShowServiceDetaile(!showServiceDetaile);
          }, 100);
        }}
        className={`${
          isThemeDark
            ? "bg-[#1E212B] hover:bg-[#212B36]"
            : "bg-gradient-to-r from-blue-200 to-green-100 text-slate-800"
        } relative  transition-all ease-in duration-20000 flex justify-between px-6 sm:px-8 md:px-12 items-center  h-[87px] rounded-xl font-extrabold`}
      >
        <h6 className="sm:text-lg md:text-xl xl:font-bold font-semibold text-center">
          {title}
        </h6>
        <span className=" text-2xl sm:text-3xl">
          <FaAngleDown />
        </span>
      </summary>
      <div
        className={`${
          isThemeDark
            ? "bg-[#1c212a]"
            : "bg-gradient-to-r from-blue-200 to-green-100  text-slate-900"
        } ${
          showServiceDetaile ? "opacity-100" : "opacity-0"
        } p-6 pt-10 flex flex-col xl:flex-row  items-center gap-9 rounded-lg transition-all ease-in duration-200 w- -mt-4`}
      >
        <Image
          src={imageSrc}
          alt="Services Details"
          width="350"
          height="350"
          className="w-[310px] sm:w-3/5 h-[175px] md:h-[225px] lg:h-[250px] xl:w-[350px]  rounded-xl"
        />
        <p className="sm:text-lg font-[500] 2xl:font-semibold p-3">
          {description}
        </p>
      </div>
    </details>
  );
};

export default ServicesDetail;
