"use client";

import { useState, useEffect } from "react";
import { ServicesDetails as servicesData } from "../data/data";
import { ServicesDetail } from ".";
const ServicesDetailsList = () => {
  const [servicesDetails, setServicesDetails] = useState([]);
  useEffect(() => {
    const data = JSON.parse(servicesData);
    setServicesDetails(data);
  }, []);
  return (
    <section className="bg-[#151822] w-full lg:w-[90%] rounded-2xl min-h-screen pt-28 flex flex-col items-center gap-20">
      <div className="flex flex-col gap-5 items-center">
        <h5 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center">
          Our Competencies
        </h5>
        <p className="w-4/5 md:w-3/5 text-center text-gray-400 text-lg">
          We fully understand your business. If you need to update something, we
          are more than happy to help you with the services we are providing
        </p>
      </div>

      <article className="flex flex-col items-center w-full gap-7">
        {servicesDetails.length > 0 &&
          servicesDetails.map((detail: ServicesDetail) => (
            <ServicesDetail
              title={detail.title}
              imageSrc={detail.imageSrc}
              description={detail.description}
            />
          ))}
      </article>
    </section>
  );
};

export default ServicesDetailsList;
