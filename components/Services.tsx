import { ArticlesHighlights, ServicesDetailsList, ServicesCardsList } from ".";

const Services = () => {
  return (
    <section
      id="services-section"
      className="absolute tall:top-[120vh] xl:top-[117vh] top-[150vh] z-40 bg-[#161C24] flex flex-col items-center py-10  gap-12 lg:gap-16 w-full">
      <div className="flex flex-col gap-5 items-center">
        <div className="w-16 rounded-3xl bg-gray-600 h-1" />
        <h3 className="text-gray-600 font-semibold">RASAM</h3>
      </div>

      <h3 className="font-semibold text-lg md:text-4xl drop-shadow-[0_0.5px_1px_whitesmoke]">
        What Rasam Helps you with
      </h3>

      <ServicesCardsList />

      <ServicesDetailsList />

      <ArticlesHighlights />
    </section>
  );
};

export default Services;
