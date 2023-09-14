"use client";
import { themeContext } from "@/components/Providers";
import Image from "next/image";
import { useContext } from "react";

const Loading = () => {
  const { isThemeDark } = useContext(themeContext);
  return <div></div>;
};

export default Loading;
