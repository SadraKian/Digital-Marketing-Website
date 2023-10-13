"use client";
import { useState } from "react";
const ErrorMsg = ({ errMsg }: { errMsg: string }) => {
  const [showErrMsg, setShowErrMsg] = useState(true);
  return (
    <>
      {showErrMsg && (
        <section className="w-screen h-screen fixed top-0 left-0 grid place-content-center pt-40 bg-[#00000071]">
          <div className="bg-slate-300 rounded-md w-[300px] h-[225px] flex justify-center items-center">
            <p>{errMsg}</p>
            <button
              type="button"
              onClick={() => setShowErrMsg(false)}
              className="w-28 rounded-md grid place-content-center text-white font-semibold"
            >
              باشه
            </button>
          </div>
        </section>
      )}
    </>
  );
};

export default ErrorMsg;
