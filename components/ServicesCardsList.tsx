import Image from "next/image";

const ServicesCardsList = () => {
  return (
    <article className="flex flex-col lg:flex-row lg:gap-24 w-full p-6 gap-12 items-center lg:items-start lg:justify-center">
      <section className="w-[280px] xsm:w-[380px] sm:w-[420] md:w-[450px] lg:w-[300px] flex flex-col items-center pt-10 px-8 pb-6   bg-[#212B36] rounded-xl  object-contain gap-7 lg:gap-12 h-[300px] md:h-[375px] lg:h-[375px]  hover:scale-110 transition-all ease-in duration-300">
        <Image
          src="/assets/images/ui.svg"
          alt="UI & UX Design"
          title="UI & UX Design"
          width="50"
          height="50"
          className="w-10 h-10"
        />
        <h5 className="text-lg font-semibold">UI & UX Design</h5>
        <p className="text-center font-[500]  ">
          Rasam has a team of talented and experienced designers who can
          transform your visions into reality.
        </p>
      </section>

      <section className="w-[280px] xsm:w-[380px] sm:w-[420] md:w-[450px] lg:w-[300px] flex flex-col items-center pt-10 px-8 pb-6 bg-[#212B36] rounded-xl  object-contain gap-7 lg:gap-12 h-[300px]  md:h-[375px] md:-order-1 lg:mt-14 hover:scale-110 transition-all ease-in duration-300">
        <Image
          src="/assets/images/dev.svg"
          alt="Development"
          title="Development"
          width="50"
          height="50"
          className="w-10 h-10"
        />
        <h5 className="text-lg font-semibold">Development</h5>
        <p className="text-center font-[500] ">
          Our developers are proficient in a wide range of technologies and
          frameworks, and follow the industry standards and best practices.
        </p>
      </section>

      <section className="w-[280px] xsm:w-[380px] sm:w-[420] md:w-[450px] lg:w-[300px] flex flex-col items-center pt-10 px-8 pb-6  bg-[#212B36] rounded-xl  object-contain gap-7 lg:gap-12 h-[300px]  md:h-[375px] lg:mt-14 hover:scale-105 transition-all ease-in duration-300">
        <Image
          src="/assets/images/branding.svg"
          alt="Branding"
          title="Branding"
          width="50"
          height="50"
          className="w-10 h-10"
        />
        <h5 className="text-lg font-semibold">Branding</h5>
        <p className="text-center font-[500]">
          Contact us today and let us help you stand out with unique and
          memorable identity for your business.
        </p>
      </section>
    </article>
  );
};

export default ServicesCardsList;
