"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { MobileNav } from ".";
const Nav = ({ isMobileNavVisible, setIsMobileNavVisible }: NavProps) => {
  const [mobileNavContent, setMobileNavContent] = useState(<div></div>);
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
      <div className="dekstopNav hidden md:flex gap-7  h-[70px] items-center">
        <nav className="flex gap-12 lg:gap-16 font-semibold">
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
      </div>
    </section>
  );
};

export default Nav;
