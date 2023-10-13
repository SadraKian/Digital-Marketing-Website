"use client";
import { useState, useEffect } from "react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const AlertMessage = ({
  isSucssesful,
  message,
}: {
  isSucssesful: boolean;
  message: string;
}) => {
  const [showAlert, setShowAlert] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowAlert(false);
    }, 2500);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  const content = showAlert && (
    <div className="fixed top-28 text-sm md:text-base px-4 drop-shadow-2xl   w-[300px] md:w-[420px] h-[75px] rounded-md bg-white text-black font-semibold flex items-center justify-center gap-3 transition-all ease-in duration-300">
      {isSucssesful && <FaCheckCircle className="text-5xl text-green-500" />}
      {!isSucssesful && <FaTimesCircle className="text-5xl text-red-600" />}
      <p>{message}</p>
    </div>
  );
  if (content) {
    return content;
  }
};

export default AlertMessage;
