"use client";
import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { API } from "@/Constants";
import { AlertMessage, LoadingRequset } from "..";

const ContactUs = () => {
  const [isSucssesful, setIsSucssesful] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const [title, setTitle] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  const resetInputValues = () => {
    setTitle("");
    setEmail("");
    setText("");
  };

  const postMessage = useMutation({
    mutationKey: ["post", "contactUs"],
    mutationFn: async (obj: ContactUsInfo) => {
      try {
        setIsLoading(false);
        setErrMsg("");
        setIsLoading(true);
        const resp = await axios.post(`${API}/contact-us/`, obj, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        setIsSucssesful(true);
        resetInputValues();
      } catch (error: any) {
        setErrMsg(`${error}`);
      } finally {
        setIsLoading(false);
      }
    },
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (text && title && email) {
      const messageInfo = {
        title,
        email,
        text,
      };

      postMessage.mutate(messageInfo);
    } else {
      alert("please enter the right information");
    }
  };

  return (
    <div id="contactUs" className="w-screen flex justify-center">
      {isLoading && (
        <div className="flex flex-col  w-4/5 sm:w-[70%] md:w-4/5 lg:w-3/4 2xl:w-2/3 items-center  justify-evenly  my-36 pl-24 2xl:pl-[110px]">
          <LoadingRequset />
        </div>
      )}
      {!isLoading && isSucssesful && errMsg == "" && (
        <AlertMessage
          isSucssesful={isSucssesful}
          message="Your message has been successfully submitted"
        />
      )}
      {!isLoading && !isSucssesful && errMsg !== "" && (
        <AlertMessage isSucssesful={isSucssesful} message={errMsg} />
      )}
      {!isLoading && (
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="flex flex-col  w-4/5 sm:w-[70%] md:w-4/5 lg:w-3/4 2xl:w-2/3 items-center  justify-evenly gap-10 md:gap-12 xl:gap-16 my-36 "
        >
          <h4 className="text-center font-extrabold  text-3xl">Contact Us</h4>
          <div className="flex flex-col md:flex-row w-full gap-10 items-center md:items-start justify-evenly">
            <ul className="w-full md:w-2/5 flex flex-col gap-6  mt-2">
              <li className="w-full flex flex-col gap-2">
                <label htmlFor="title" className="font-bold sm:text-lg ">
                  Title
                </label>
                <input
                  id="title"
                  name="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  type="text"
                  required
                  className="p-2 rounded-md w-full indent-2  border-gray-400 h-11 text-black "
                />
              </li>
              <li className="w-full flex flex-col gap-2">
                <label htmlFor="email" className="font-bold sm:text-lg ">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  required
                  className="p-2 rounded-md w-full indent-2  border-gray-400 h-11 text-black "
                />
              </li>
              <li className="w-full hidden md:flex">
                <button
                  type="submit"
                  className="w-28 rounded-md bg-gradient-to-br from-blue-500 to-purple-500 font-semibold h-11"
                >
                  Submit
                </button>
              </li>
            </ul>
            <ul className="w-full md:w-[45%] flex flex-col gap-6">
              <li className="w-full flex flex-col gap-3">
                <label htmlFor="message" className="font-bold sm:text-lg ">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  placeholder="Enter your message ..."
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  className="resize-none w-full h-56 rounded-md text-black p-4"
                />
              </li>
              <li className="w-full md:hidden flex">
                <button
                  type="submit"
                  className="w-28 rounded-md  bg-gradient-to-br from-blue-500 to-purple-500 font-semibold h-11"
                >
                  Submit
                </button>
              </li>
            </ul>
          </div>
        </form>
      )}
    </div>
  );
};

export default ContactUs;
