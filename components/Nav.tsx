"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { FaTimes } from "react-icons/fa";
import Link from "next/link";
const Nav = ({ isMobileNavVisible, setIsMobileNavVisible }: NavProps) => {
  const [mobileNavContent, setMobileNavContent] = useState(<div></div>);
  useEffect(() => {
    if (isMobileNavVisible) {
      setTimeout(() => {
        setMobileNavContent(
          <div className="flex  flex-col gap-12">
            <button
              onClick={() => setIsMobileNavVisible(!isMobileNavVisible)}
              className="absolute right-[10px] top-[10px] text-2xl hover:bg-gray-700 p-2 rounded-full transition-all ease-in duration-300">
              <FaTimes />
            </button>
            <div className="flex  gap-1 object-contain">
              <Image
                src="/assets/images/logo.png"
                alt="Rasam logo"
                title="Rasam"
                width="280"
                height="557"
                className="w-6 h-12"
              />
              <Image
                src="/assets/images/logoText.png"
                width="588"
                height="124"
                className="w-[120px] h-[24px] mt-7"
                alt="Digital marketing logo"
                title="Digital Marketing"
              />
            </div>
            <nav className=" flex flex-col gap-14 font-semibold text-lg ">
              <Link href="" className="hover:text-yellow-200">
                Home
              </Link>
              <Link href="" className="hover:text-yellow-200">
                Blog
              </Link>
              <Link href="" className="hover:text-yellow-200">
                About Us
              </Link>
              <Link href="" className="hover:text-yellow-200">
                Contact Us
              </Link>
            </nav>
          </div>
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
        className={`md:hidden h-screen fixed top-0 left-0  bg-[#212B36] z-20 transition-all ease-in duration-300 ${
          isMobileNavVisible ? "w-[250px] p-5 opacity-100" : "w-0 opacity-0"
        }`}>
        {mobileNavContent}
      </div>
      <div className="dekstopNav hidden md:block">
        <nav className="flex gap-10 lg:gap-14 font-semibold h-[70px] items-center">
          <Link href="">Home</Link>
          <Link href="">Blog</Link>
          <Link href="">About Us</Link>
          <Link href="">Contact Us</Link>
          <button className="bg-primary hidden min-[900px]:block w-[126px] h-[38px] rounded-lg">
            Purchase now
          </button>
        </nav>
      </div>
    </section>
  );
};

export default Nav;
