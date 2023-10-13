"use client";
import React, { useContext, useEffect, useState } from "react";
import { settingsContext, themeContext } from "../shared/Providers";
import {
  FaRegMoon,
  FaRegSun,
  FaMoon,
  FaSun,
  FaTimes,
  FaRedo,
  FaGlobe,
  FaPenFancy,
  FaCheck,
} from "react-icons/fa";

// Presets colors

const presetsObject = {
  primary: "#00AB55",
  lightBlue: "#2e6ffd",
  red: "#e02c2c",
  orange: "#b74f07",
  darkBlue: "#063cb1",
  purple: "#701490",
};
// Getting presets colors into an array
const presetsArray = Object.entries(presetsObject);

//Creaing a component for presets buttons
const PresetButton = ({
  setPresets,
  preset,
  currentPreset,
}: PresetsButtonProps) => {
  return (
    <button
      onClick={() => {
        setPresets(preset);
        const presetJson = JSON.stringify(preset);
        localStorage.setItem("presets", presetJson);
      }}
      style={{ color: preset[1] }}
      className="w-[60px] h-12 border relative border-solid border-[#5b646e75] rounded-lg grid place-content-center  transition-all ease-in duration-300 hover:bg-[#5b646e5e]"
    >
      {preset[1] == currentPreset[1] && (
        <FaCheck className="absolute top-1 right-2 text-[10px] text-white" />
      )}
      <FaPenFancy />
    </button>
  );
};

const Settings = () => {
  let { isSettingsOpen, setIsSettingsOpen } = useContext(settingsContext);
  let { isThemeDark, setIsThemeDark, setPresets, presets } =
    useContext(themeContext);

  return (
    <section
      className={`${
        isSettingsOpen ? "w-full xsm:w-[275px]" : "w-0"
      }  text-white fixed  top-0 right-0 flex-col items-center  bg-[#202a35]  sm:bg-[#202a35de] min-h-screen z-50 py-2 tall:py-6 transition-all ease-in duration-300`}
    >
      <div
        className={`${
          !isSettingsOpen ? "opacity-0" : ""
        } setting-content flex-col tall:gap-6 gap-3  items-center px-16 xsm:px-0`}
      >
        <div className="flex  font-bold justify-between items-center border-b-2 border-dotted py-7 xsm:p-7  border-[#baccdb80]">
          <h6>Settings</h6>

          <div className="flex gap-4 ">
            <button
              onClick={() => {
                setIsThemeDark(true);
                setPresets(presetsArray[0]);
                localStorage.setItem("theme", "dark");
                localStorage.setItem("presets", `["primary", "#00AB55"]`);
              }}
              className="text-[15px] hover:text-blue-400 transition-all ease-in duration-300"
            >
              <FaRedo />
            </button>

            <button
              onClick={() => {
                setIsSettingsOpen(false);
              }}
              className="text-[21px] hover:text-red-500 transition-all ease-in duration-300"
            >
              <FaTimes />
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-2  tall:gap-4 py-2 tall:py-4  px-7">
          <h6 className="font-semibold   sm:ml-0">Mode</h6>
          <div className="flex gap-10 xsm:gap-8 w-full justify-center">
            <button
              onClick={() => {
                setIsThemeDark(true);
                localStorage.setItem("theme", "dark");
              }}
              className="w-[90px] h-16 grid place-content-center text-2xl border border-solid border-[#5b646e75] rounded-xl transition-all ease-in duration-300 hover:bg-[#5b646e5e]"
            >
              {!isThemeDark ? (
                <FaRegMoon className="text-white" />
              ) : (
                <FaMoon className="text-yellow-400" />
              )}
            </button>
            <button
              onClick={() => {
                setIsThemeDark(false);
                localStorage.setItem("theme", "light");
              }}
              className="w-[90px] h-16 grid place-content-center text-2xl border border-solid border-[#5b646e75] rounded-xl transition-all ease-in duration-300 hover:bg-[#5b646e5e]"
            >
              {isThemeDark ? (
                <FaRegSun className="text-white" />
              ) : (
                <FaSun className="text-yellow-400" />
              )}
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-4 py-4 px-7">
          <h6 className="font-semibold  sm:ml-0">Language</h6>
          <div className="flex gap-10 xsm:gap-8 w-full justify-center  text-white ">
            <button className="w-[90px] h-16 flex flex-col justify-center items-center gap-2 text-lg border border-solid border-[#5b646e75] rounded-xl transition-all ease-in duration-300 hover:bg-[#5b646e5e]">
              <FaGlobe />
              <span className="text-xs">EN</span>
            </button>
            <button className="w-[90px] h-16 flex flex-col justify-center gap-2 items-center text-lg border border-solid border-[#5b646e75] rounded-xl transition-all ease-in duration-300 hover:bg-[#5b646e5e]">
              <FaGlobe />
              <span className="text-xs">FA</span>
            </button>
          </div>
        </div>
        <div className="flex flex-col items-center gap-4 p-4  sm:px-4 ">
          <h6 className="font-semibold self-start ml-4">Presets</h6>

          <div className="grid grid-cols-3 gap-4">
            {presetsArray.map((item, index: number) => (
              <PresetButton
                key={index}
                setPresets={setPresets}
                preset={item}
                currentPreset={presets}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Settings;
