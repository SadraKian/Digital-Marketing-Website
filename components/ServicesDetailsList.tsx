"use client";
import { useState, useEffect, useContext } from "react";
import { ServicesDetails as servicesData } from "@/data/data";
import { ServicesDetail } from ".";
import { themeContext } from "./Providers";

const ServicesDetailsList = () => {
  const [servicesDetails, setServicesDetails] = useState([]);
  useEffect(() => {
    const data = JSON.parse(servicesData);
    setServicesDetails(data);
  }, []);

  let { isThemeDark } = useContext(themeContext);

  return (
    <section
      className={`${
        isThemeDark ? "bg-[#151822]" : "text-white"
      } w-full lg:w-[90%] rounded-2xl py-20 flex flex-col items-center gap-20`}>
      <div className="flex flex-col gap-5 items-center">
        <h5 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center">
          Our Competencies
        </h5>
        <p
          className={`${
            isThemeDark ? "text-slate-700" : "text-blue-200"
          } w-4/5 md:w-3/5 text-center x text-lg`}>
          We fully understand your business. If you need to update something, we
          are more than happy to help you with the services we are providing
        </p>
      </div>

      <article className="flex flex-col items-center w-full gap-7">
        {servicesDetails.length > 0 &&
          servicesDetails.map((detail: ServicesDetail) => (
            <ServicesDetail key={detail.id} servicesDetailInfo={detail} />
          ))}
      </article>
    </section>
  );
};

export default ServicesDetailsList;
