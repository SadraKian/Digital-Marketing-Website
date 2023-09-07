"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Nav } from ".";

const Header = () => {
  const [isMobileNavVisible, setisMobileNavVisible] = useState(false);
  return (
    <header className="flex justify-between w-full h-[15vh] object-contain py-4 px-4 md:px-8 lg:px-16 xl:px-24 2xl:px-36">
      <div className="flex  gap-1 object-contain">
        <Image
          src="/assets/images/logo.png"
          alt="Rasam logo"
          title="Rasam"
          width="280"
          height="557"
          className="w-7 h-14"
        />
        <Image
          src="/assets/images/logoText.png"
          width="588"
          height="124"
          className="w-[140px] h-[28px] mt-8"
          alt="Digital marketing logo"
          title="Digital Marketing"
        />
      </div>

      <div className="absolute right-3 top-7 flex gap-5 h-[50px] items-center ">
        <button className="bg-primary hidden  min-[440px]:block md:hidden w-[126px] h-[38px] rounded-lg">
          Purchase now
        </button>
        <button
          className="md:hidden grid place-content-center  w-[50px] h-[50px] hover:bg-gray-700  transition-all ease-in duration-300 rounded-full"
          onClick={() => setisMobileNavVisible(!isMobileNavVisible)}>
          <div
            className={`transition-all ease-in duration-500 w-8 h-1  rounded-full relative bg-white before:content-[''] before:w-8 before:h-1 before:bg-white before:absolute  before:rounded-full  ${
              !isMobileNavVisible ? "hamburgerBtn" : "animatedHamburgerBtn"
            }`}
          />
        </button>
      </div>
      <Nav
        isMobileNavVisible={isMobileNavVisible}
        setIsMobileNavVisible={setisMobileNavVisible}
      />
    </header>
  );
};

export default Header;
