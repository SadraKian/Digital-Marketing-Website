"use client";
import React, { useContext } from "react";
import { settingsContext, themeContext } from "./Providers";
import {
  FaRegMoon,
  FaRegSun,
  FaMoon,
  FaSun,
  FaTimes,
  FaRedo,
  FaLanguage,
  FaGlobe,
  FaPenFancy,
} from "react-icons/fa";

const Settings = () => {
  let { isSettingsOpen, setIsSettingsOpen } = useContext(settingsContext);

  return (
    <section
      className={`${
        isSettingsOpen ? "w-full  sm:w-[275px]" : "w-0"
      }  text-white fixed  top-0 right-0 tall:rounded-xl  bg-[#202a35]  sm:bg-[#202a35de] z-50 py-2 tall:py-6 transition-all ease-in duration-300`}>
      <div
        className={`${
          isSettingsOpen
            ? "opacity-100 transition-all ease-in duration-50 delay-300"
            : "opacity-0"
        }  flex flex-col tall:gap-6 gap-3  items-center min-h-screen`}>
        <div className="flex w-full font-bold justify-between items-center border-b-2 border-dotted p-7 border-[#baccdb80]">
          <h6>Settings</h6>

          <div className="flex gap-4 ">
            <button className="text-[15px] hover:text-blue-400 transition-all ease-in duration-300">
              <FaRedo />
            </button>

            <button
              onClick={() => {
                setIsSettingsOpen(false);
              }}
              className="text-[21px] hover:text-red-500 transition-all ease-in duration-300">
              <FaTimes />
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-2 tall:gap-4 py-2 tall:py-4 px-7">
          <h6 className="font-semibold">Mode</h6>
          <div className="flex gap-3 w-full justify-between text-white ">
            <button className="w-[90px] h-16 grid place-content-center text-2xl border border-solid border-[#5b646e5e] rounded-xl transition-all ease-in duration-300 hover:bg-[#5b646e5e]">
              <FaRegMoon />
            </button>
            <button className="w-[90px] h-16 grid place-content-center text-2xl border border-solid border-[#5b646e5e] rounded-xl transition-all ease-in duration-300 hover:bg-[#5b646e5e]">
              <FaRegSun />
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-4 py-4 px-7">
          <h6 className="font-semibold">Language</h6>
          <div className="flex gap-3 w-full justify-between text-white ">
            <button className="w-[90px] h-16 flex flex-col justify-center items-center gap-2 text-lg border border-solid border-[#5b646e5e] rounded-xl transition-all ease-in duration-300 hover:bg-[#5b646e5e]">
              <FaGlobe />
              <span className="text-xs">EN</span>
            </button>
            <button className="w-[90px] h-16 flex flex-col justify-center gap-2 items-center text-lg border border-solid border-[#5b646e5e] rounded-xl transition-all ease-in duration-300 hover:bg-[#5b646e5e]">
              <FaGlobe />
              <span className="text-xs">FA</span>
            </button>
          </div>
        </div>
        <div className="flex flex-col  gap-4 p-4 px-14 sm:px-4 sm:pl-10">
          <h6 className="font-semibold">Presets</h6>

          <div className="flex flex-col gap-3 ">
            <div className="flex gap-3">
              <button className="w-[60px] h-12 border border-solid border-[#5b646e5e] rounded-lg grid place-content-center text-red-500 transition-all ease-in duration-300 hover:bg-[#5b646e5e]">
                <FaPenFancy />
              </button>
              <button className="w-[60px] h-12 border border-solid border-[#5b646e5e] rounded-lg grid place-content-center text-purple-600 transition-all ease-in duration-300 hover:bg-[#5b646e5e]">
                <FaPenFancy />
              </button>
              <button className="w-[60px] h-12 border border-solid border-[#5b646e5e] rounded-lg grid place-content-center text-primary transition-all ease-in duration-300 hover:bg-[#5b646e5e]">
                <FaPenFancy />
              </button>
            </div>

            <div className="flex gap-3">
              <button className="w-[60px] h-12 border border-solid border-[#5b646e5e] rounded-lg grid place-content-center text-blue-600 transition-all ease-in duration-300 hover:bg-[#5b646e5e]">
                <FaPenFancy />
              </button>
              <button className="w-[60px] h-12 border border-solid border-[#5b646e5e] rounded-lg grid place-content-center text-orange-500 transition-all ease-in duration-300 hover:bg-[#5b646e5e]">
                <FaPenFancy />
              </button>
              <button className="w-[60px] h-12 border border-solid border-[#5b646e5e] rounded-lg grid place-content-center text-blue-400 transition-all ease-in duration-300 hover:bg-[#5b646e5e]">
                <FaPenFancy />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Settings;
