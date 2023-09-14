"use client";
import { useContext, useEffect, useState } from "react";
import { settingsContext, themeContext } from "./Providers";
import Link from "next/link";
import { MobileNav } from ".";
import { FaCog } from "react-icons/fa";
const Nav = ({ isMobileNavVisible, setIsMobileNavVisible }: NavProps) => {
  const [mobileNavContent, setMobileNavContent] = useState(<div></div>);
  let { isSettingsOpen, setIsSettingsOpen } = useContext(settingsContext);
  useEffect(() => {
    if (isMobileNavVisible) {
      setTimeout(() => {
        setMobileNavContent(
          <MobileNav
            isMobileNavVisible={isMobileNavVisible}
            setIsMobileNavVisible={setIsMobileNavVisible}
          />
        );
      }, 300);
    } else {
      setMobileNavContent(<div></div>);
    }
  }, [isMobileNavVisible]);

  return (
    <section>
      <div
        id="mobileNav"
        className={`md:hidden h-screen fixed top-0 left-0  bg-[#212B36] z-20 transition-all ease-in duration-300  ${
          isMobileNavVisible ? "w-[250px]  p-5 " : "w-0 "
        }`}>
        {mobileNavContent}
      </div>
      <div className=" hidden md:flex gap-7  h-[90px] items-center">
        <nav
          id="dekstopNav"
          aria-label="Main Dekstop Nav"
          className="flex gap-12 lg:gap-16 font-semibold">
          <Link href="/" className="hover:text-yellow-300">
            Home
          </Link>
          <Link href="" className="hover:text-yellow-300">
            Blog
          </Link>
          <Link href="" className="hover:text-yellow-300">
            About Us
          </Link>
          <Link href="" className="hover:text-yellow-300">
            Contact Us
          </Link>
        </nav>
        <button className="bg-primary transition-all ease-in hover:opacity-90 duration-300 hover:drop-shadow-[0_4px_5px_rgb(0,171,85,0.5)] hidden font-semibold md2:block w-[130px] h-[38px] rounded-lg">
          Purchase now
        </button>
        <button
          onClick={() => {
            setIsSettingsOpen(!isSettingsOpen);
          }}
          className="relative  lg:-right-7 xl-right-10   text-2xl hover:text-primary transition-all ease-in duration-300">
          <FaCog />
        </button>
      </div>
    </section>
  );
};

export default Nav;
