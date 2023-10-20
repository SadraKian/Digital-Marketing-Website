"use client";
import { useContext, useEffect, useState } from "react";
import { settingsContext, themeContext } from "../shared/Providers";
import Link from "next/link";
import { MobileNav } from "..";
import { FaCog } from "react-icons/fa";
const Nav = ({ isMobileNavVisible, setIsMobileNavVisible }: NavProps) => {
  const [mobileNavContent, setMobileNavContent] = useState(<div></div>);
  let { isSettingsOpen, setIsSettingsOpen } = useContext(settingsContext);
  let { presets } = useContext(themeContext);
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
      <div className=" hidden md:flex gap-5 2xl:mr-9 md:mr-4 lg:mr-6  h-[90px] items-center">
        <nav
          id="dekstopNav"
          aria-label="Main Dekstop Nav"
          className="flex gap-12 lg:gap-16 font-semibold">
          <Link
            href="/"
            className="hover:text-slate-400 transition-all ease-in duration-300">
            Home
          </Link>
          <Link
            href="/blog"
            className="hover:text-slate-400 transition-all ease-in duration-300">
            Blog
          </Link>
          <Link
            href="/about"
            className="hover:text-slate-400 transition-all ease-in duration-300">
            About Us
          </Link>
          <Link
            href="/about#contactUs"
            className="hover:text-slate-400 transition-all ease-in duration-300">
            Contact Us
          </Link>
        </nav>
        <button
          onClick={() => {
            setIsSettingsOpen(!isSettingsOpen);
          }}
          className={`hover-${presets[0]} relative p-2 text-2xl transition-all ease-in duration-300`}>
          <FaCog />
        </button>
      </div>
    </section>
  );
};

export default Nav;
