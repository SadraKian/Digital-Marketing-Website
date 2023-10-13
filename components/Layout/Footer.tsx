"use client";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { themeContext } from "../shared/Providers";
import { useContext } from "react";

const Footer = ({ top }: { top: string }) => {
  const { isThemeDark, presets } = useContext(themeContext);
  return (
    <footer
      className={`${
        isThemeDark ? "bg-[#232932]" : "bg-slate-700"
      }  relative ${top} text-white w-screen p-6 sm:p-8 md:p-9 flex flex-col items-center  gap-8`}
    >
      <section className="flex flex-col w-4/5 sm:w-2/3 gap-8 items-center border-b-2 border-slate-500 border-solid py-10">
        <h6 className="text-lg sm:text-xl 2xl:text-3xl font-semibold ">
          Want to partner with us?
        </h6>
        <p className="text-center text-sm md:text-base md:w-5/6">
          our experienced team is here to help you thrive in the digital
          landscape. Let's join forces and create impactful, data-driven
          strategies that drive results and foster success.
        </p>
        <button
          className={`${
            isThemeDark
              ? "bg-[#62A0FF] hover:bg-[#4881d6] text-gray-700"
              : "bg-gradient-to-r from-blue-600 to-blue-500 text-gray-100 hover:brightness-125"
          }text-sm font-semibold  md:font-bold  w-24 h-9  md:w-28 md:h-10 rounded-md  transition-all ease-in duration-200`}
        >
          Join now
        </button>
      </section>

      <nav
        id="footer-nav"
        aria-label="Footer Nav"
        className="flex flex-wrap gap-x-36  gap-y-14 justify-start lg:justify-center md:text-[15px] lg:text-base  border-b-2  border-slate-500 border-solid pb-10 w-2/3"
      >
        <ul className="flex flex-col gap-3">
          <li>
            <h6
              style={{ color: presets[1] }}
              className=" text-lg  font-semibold"
            >
              Services
            </h6>
          </li>
          <li className="hover:text-slate-400 transition-all ease-in duration-300">
            <Link
              className="hover:text-slate-400 transition-all ease-in duration-300"
              href=""
            >
              UI & UX Design
            </Link>
          </li>
          <li className="hover:text-slate-400 transition-all ease-in duration-300">
            <Link
              className="hover:text-slate-400 transition-all ease-in duration-300"
              href=""
            >
              Digital Marketing
            </Link>
          </li>
          <li className="hover:text-slate-400 transition-all ease-in duration-300">
            <Link
              className="hover:text-slate-400 transition-all ease-in duration-300"
              href=""
            >
              Software Development
            </Link>
          </li>
          <li className="hover:text-slate-400 transition-all ease-in duration-300">
            <Link
              className="hover:text-slate-400 transition-all ease-in duration-300"
              href=""
            >
              Digital Advetising
            </Link>
          </li>
        </ul>

        <ul className="flex flex-col gap-3">
          <li>
            <h6 style={{ color: presets[1] }} className="text-lg font-semibold">
              Contact
            </h6>
          </li>
          <li>
            <Link
              className="hover:text-slate-400 transition-all ease-in duration-300"
              href=""
            >
              Join now
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-slate-400 transition-all ease-in duration-300"
              href=""
            >
              Team
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-slate-400 transition-all ease-in duration-300"
              href=""
            >
              Contact us
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-slate-400 transition-all ease-in duration-300"
              href=""
            >
              About us
            </Link>
          </li>
        </ul>

        <ul className="flex flex-col gap-3">
          <li>
            <h6
              style={{ color: presets[1] }}
              className="text-primary text-lg font-semibold"
            >
              Rasam
            </h6>
          </li>
          <li>
            <Link
              className="hover:text-slate-400 transition-all ease-in duration-300"
              href=""
            >
              Home Page
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-slate-400 transition-all ease-in duration-300"
              href=""
            >
              Blogs
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-slate-400 transition-all ease-in duration-300"
              href=""
            >
              Terms of service
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-slate-400 transition-all ease-in duration-300"
              href=""
            >
              About us
            </Link>
          </li>
        </ul>
      </nav>

      <section
        id="footer-socialMedia-section"
        className="flex flex-col sm:flex-row justify-evenly items-center w-full gap-8 mb-4"
      >
        <div className="flex gap-3 lg:gap-5 items-center ">
          <Image
            src="/assets/images/logo.png"
            alt="Rasam logo"
            title="Rasam"
            width="280"
            height="557"
            className="w-8 h-14 sm:w-7 sm:h-12 lg:w-9 lg:h-16"
          />

          <div className="flex flex-col gap-1">
            <h6 className="text-sm font-semibold drop-shadow(0_3px_5px_white">
              Rasam Group 2023
            </h6>
            <span className="text-sm text-gray-300">
              All Rights Reserved &copy;
            </span>
          </div>
        </div>

        <div className="flex gap-5 ">
          <Link
            href=""
            className="text-2xl sm:text-2xl lg:text-3xl hover:text-green-500 hover:drop-shadow-[0_1px_2px_rgb(34,197,94)] transition-all ease-in duration-300"
          >
            <FaWhatsapp />
          </Link>
          <Link
            href=""
            className="text-2xl sm:text-2xl lg:text-3xl hover:text-orange-300 hover:drop-shadow-[0_1px_2px_yellow] transition-all ease-in duration-300"
          >
            <FaInstagram />
          </Link>
          <Link
            href=""
            className="text-3xl sm:text-2xl lg:text-3xl hover:text-red-500 hover:drop-shadow-[0_1px_2px_rgb(239,68,68)] transition-all ease-in duration-300"
          >
            <FaYoutube />
          </Link>
          <Link
            href=""
            className="text-3xl sm:text-2xl lg:text-3xl hover:text-purple-600 hover:drop-shadow-[0_1px_2px_rgb(147,51,234)] transition-all ease-in duration-300"
          >
            <FaGithub />
          </Link>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
