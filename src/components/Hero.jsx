import React, { useEffect, useState } from "react";
import { heroImg } from "../assets/assests";

const Hero = () => {
      const [animate, setAnimate] = useState(false);

      useEffect(() => {
        // Start animations when the component mounts
        setTimeout(() => setAnimate(true), 100);
      }, []);
  return (
    <div
      id="hero"
      className="px-8 pt-8 sm:py-0 gap-4 sm:gap-0 flex flex-col sm:flex-row item-center w-full h-[650px] sm:h-[430px] lg:h-[500px] md:px-16 bg-[#C8EBFF] overflow-hidden"
    >
      <div
        id="heroLeft"
        className="flex flex-col item-center w-fit text-center sm:text-start sm:w-[50%] justify-center h-[50%] sm:h-full sm:items-start gap-2"
      >
        <p
          className={`text-lg md:text-[25px] ${
            animate ? "fade-in delay-1" : "opacity-0"
          }`}
        >
          Mega Offers
        </p>
        <p
          className={`text-[45px] w-full md:text-[50px] lg:text-[65px] md:w-[80%] ${
            animate ? "fade-in delay-2" : "opacity-0"
          }`}
        >
          Summer Offer 2025 Collection
        </p>
        <div className="text-center sm:text-start w-full mt-4">
          <a href="#products">
            <button
              className={`btnHover cursor-pointer text-lg md:text-[20px] border rounded-full  px-10 py-2 ${
                animate ? "fade-in delay-3" : "opacity-0"
              }`}
            >
              Shop Now
            </button>
          </a>
        </div>
      </div>
      <div
        id="heroRight"
        className="w-full sm:w-[50%] h-full relative flex justify-center"
      >
        <img
          src={heroImg}
          alt="heroImage"
          className={`max-[350px]:h-[250px] max-[400px]:h-[300px] h-[350px] absolute bottom-0 sm:h-[400px] lg:h-[470px] ${
            animate ? "slide-up" : "opacity-0"
          }`}
        />
      </div>
    </div>
  );
};

export default Hero;
