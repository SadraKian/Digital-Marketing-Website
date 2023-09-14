"use client";
import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import { Nav } from ".";
import { FaCog } from "react-icons/fa";
import { settingsContext, themeContext } from "./Providers";

const Header = () => {
  // Using states for finding out if the webpage should show Mobile nav and if the page is scrolled
  const [isMobileNavVisible, setisMobileNavVisible] = useState(false);
  const [isPageScrolled, setIsPageScrolled] = useState(false);

  let { isSettingsOpen, setIsSettingsOpen } = useContext(settingsContext);
  let { isThemeDark } = useContext(themeContext);

  // The function for setting the state to change the background color of the header
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsPageScrolled(true);
    } else {
      setIsPageScrolled(false);
    }
  };

  // Adding Event listeners on scroll for calling the function to change the background color
  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
      className={`${
        isThemeDark ? "text-white" : "text-black"
      } flex fixed top-0 ${
        isPageScrolled
          ? `${
              isThemeDark ? "bg-[#1c222ab8] " : "bg-[#c9cfc9cc]"
            } min-h-[70px] h-[9vh] items-center`
          : "bg-transparent h-[15vh]"
      } justify-between w-full z-40 object-contain py-4 px-4 md:px-8 lg:px-16 xl:px-24 transition-all ease-in duration-300`}>
      <div
        className={`flex gap-1 object-contain ${
          isPageScrolled ? "items-center" : ""
        }`}>
        <Image
          src={`${
            isThemeDark
              ? "/assets/images/logo.png"
              : "/assets/images/darkLogo.png"
          }`}
          alt="Rasam logo"
          title="Rasam"
          width="280"
          height="557"
          className="w-6 h-11  sm:w-7 sm:h-[53px]"
        />
        <Image
          src={`${
            isThemeDark
              ? "/assets/images/logoText.png"
              : "/assets/images/darkLogoText.png"
          }`}
          width="588"
          height="124"
          className="w-[110px] h-[24px] sm:w-[130px] sm:h-[26px] mt-7 sm:mt-8"
          alt="Digital marketing logo"
          title="Digital Marketing"
        />
      </div>

      <Nav
        isMobileNavVisible={isMobileNavVisible}
        setIsMobileNavVisible={setisMobileNavVisible}
      />

      <div className="mt-3 flex md:hidden gap-5 h-[50px] items-center ">
        <button className="bg-primary hover:drop-shadow-[0_4px_5px_rgb(0,171,85,0.5)] transition-all ease-in hover:opacity-90 duration-300 hidden font-semibold sm:block md:hidden  w-[126px] h-[38px] rounded-lg">
          Purchase now
        </button>

        <button
          id="Hamburger-munu"
          className={`${
            isThemeDark ? "hover:bg-gray-600" : "hover:bg-gray-400"
          } grid place-content-center md:hidden  w-[50px] h-[50px]   transition-all ease-in duration-300 rounded-full`}
          onClick={() => setisMobileNavVisible(!isMobileNavVisible)}>
          <div
            className={`${
              isThemeDark
                ? "bg-white before:bg-white after:bg-white"
                : "bg-slate-800 before:bg-slate-900 "
            }transition-all ease-in duration-500 w-8 h-1  rounded-full relative  before:w-8 before:h-1  before:absolute  before:rounded-full before:content-['']  ${
              !isMobileNavVisible
                ? `hamburgerBtn ${
                    isThemeDark ? "after:bg-white" : "after:bg-slate-800"
                  }`
                : "animatedHamburgerBtn"
            }`}
          />
        </button>
        <button
          onClick={() => setIsSettingsOpen(!isSettingsOpen)}
          className=" text-2xl hover:text-primary transition-all ease-in duration-300">
          <FaCog />
        </button>
      </div>
    </header>
  );
};

export default Header;
