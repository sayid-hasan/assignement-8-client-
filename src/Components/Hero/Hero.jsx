import { NavLink } from "react-router-dom";

const Hero = () => {
  return (
    <section className="bg-[#1313130D] text-black rounded-3xl ">
      <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-center lg:gap-20">
        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left gap-12 ">
          <h1 className="text-5xl font-bold  md:text-[56px] leading-[84px] playfair-display-font">
            Books to freshen up your bookshelf
          </h1>

          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <NavLink
              to="/listedbooks"
              className=" work-sans-font px-8 py-3 font-bold rounded bg-[#23BE0A] text-white text-xl "
            >
              View The List
            </NavLink>
          </div>
        </div>
        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <img
            src="https://i.postimg.cc/sDyt16Lb/pngwing-1.png"
            alt=""
            className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
