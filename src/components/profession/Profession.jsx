import Roles from "./Roles";

const rolesData = [
  {
    id: 1,
    title: "Web Development",
    description:
      "We build responsive and high-performance web applications using modern technologies, ensuring accessibility, scalability, and maintainability.",
  },
  {
    id: 2,
    title: "Perfume and Soap making",
    description:
      "We make the best kinds of perfumes that will leave people turning back just to catch a breath of you again. Our liquid soaps are also the best in Eleme.",
  },
  {
    id: 3,
    title: "Graphic Design",
    description:
      "We craft visually appealing and consistent interfaces, focusing on layout, color, and typography to ensure a seamless and engaging user journey.",
  },
  {
    id: 4,
    title: "Paint Production",
    description:
      "We make quality and beautiful pigments of paints, like Silk/Satin paint, Matt Paint, Emulsion Paint and Oil/Gloss paint. We also offer Painting services across and beyond the state. ",
  },
];

const Profession = () => {
  return (
    <div
      className="content grid md:grid-cols-2 max-xxl:px-4 xxl:px-2 py-10 md:py-15 lg:py-37.5"
      id="services"
    >
      <div className="flex flex-col justify-between h-fit md:pe-8 lg:pe-35.75 max-md:text-center my-auto">
        <p className="section-title max-md:text-center">What We Do?</p>
        <div className="mt-6 text-[14px]">
          <p className="text-xs sm:text-lg font-normal text-gray-700 mb-4">
            We specialize in designing we design, crafting engaging
            graphic designs, make the best kind of scents for perfumes and body spray, make quality paints and also offer painting services.
          </p>
          <p className="text-xs sm:text-lg font-normal text-gray-700">
            Our approach combines creativity and technical expertise to deliver
            solutions that are both visually appealing and highly functional for
            users.
          </p>
        </div>
        <a
          href="#!"
          className="mt-5 md:mt-12.5 btn btn-primary text-white w-fit md:py-3 md:px-6 text-[12px] sm:text-[16px] font-semibold max-md:mx-auto max-md:mb-5"
        >
          Say Hello!
        </a>
      </div>
      <div className="">
        {rolesData.map((role, index) => (
          <Roles role={role} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Profession;
