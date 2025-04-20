import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faTrophy,
  faLightbulb,
  faSmile,
} from "@fortawesome/free-solid-svg-icons";
import CountUp from "react-countup";

const About = () => {
  const [startCount, setStartCount] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Start counting when section is 20% visible
        if (entry.isIntersecting) {
          setStartCount(true);
          observer.disconnect(); // Stop observing once started
        }
      },
      {
        threshold: 0.2, // Trigger when 20% of the element is visible
      }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);
  return (
    <>
      <div className="flex justify-center items-center gap-4 pt-10 pb-5">
        <div className="w-[70px] sm:w-[150px] h-1 bg-black border rounded-full"></div>
        <p className="text-xl">ABOUT US</p>
        <div className="w-[70px] sm:w-[150px] h-1 bg-black border rounded-full"></div>
      </div>
      <div className="container mx-auto px-0 py-8 tracking-wider text-[#433f3f] mt-5 mb-16">
        {/* Welcome Section */}
        <div className="text-center mb-16">
          <h4 className="text-sm text-gray-500 uppercase mb-2">Who Are We</h4>
          <h2 className="text-2xl font-medium mb-4">Welcome To ShopNow</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat irure.
          </p>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16 justify-center px-20 ">
          <div className="text-start hover:bg-[#C8EBFF] p-8 transition-all duration-300 ease-in-out">
            <h3 className="text-xl font-medium mb-4">Our Vision</h3>
            <p className="text-gray-600">
              ShopNow provides how all this mistaken idea of denouncing pleasure
              and sing pain was born and will give you a complete account of the
              system.
            </p>
          </div>
          <div className="text-start hover:bg-[#C8EBFF] p-8 transition-all duration-300 ease-in-out">
            <h3 className="text-xl font-medium mb-4">Our Mission</h3>
            <p className="text-gray-600">
              ShopNow provides how all this mistaken idea of denouncing pleasure
              and sing pain was born and will give you a complete account of the
              system.
            </p>
          </div>
          <div className="text-start hover:bg-[#C8EBFF] p-8 transition-all duration-300 ease-in-out">
            <h3 className="text-xl font-medium mb-4">Our Goal</h3>
            <p className="text-gray-600">
              ShopNow provides how all this mistaken idea of denouncing pleasure
              and sing pain was born and will give you a complete account of the
              system.
            </p>
          </div>
        </div>

        {/* Statistics Section */}
        <div ref={statsRef} className="bg-[#F7F7F7] py-26 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {/* Projects Done */}
            <div>
              <FontAwesomeIcon
                icon={faBriefcase}
                className="text-4xl text-black mb-2"
              />
              <h4 className="text-3xl font-bold text-[#007AFF]">
                <CountUp start={0} end={56} duration={2.5} enableScrollSpy />
              </h4>
              <p className="text-gray-600 text-xl">Projects Done</p>
            </div>

            {/* Cups of Coffee */}
            <div>
              <FontAwesomeIcon
                icon={faTrophy}
                className="text-4xl text-black mb-2"
              />
              <h4 className="text-3xl font-bold text-[#007AFF]">
                <CountUp start={0} end={110} duration={2.5} enableScrollSpy />
              </h4>
              <p className="text-gray-600 text-xl">Cups Of Coffee</p>
            </div>

            {/* Branding */}
            <div>
              <FontAwesomeIcon
                icon={faLightbulb}
                className="text-4xl text-black mb-2"
              />
              <h4 className="text-3xl font-bold text-[#007AFF]">
                <CountUp start={0} end={67} duration={2.5} enableScrollSpy />
              </h4>
              <p className="text-gray-600 text-xl">Branding</p>
            </div>

            {/* Happy Clients */}
            <div>
              <FontAwesomeIcon
                icon={faSmile}
                className="text-4xl text-black mb-2"
              />
              <h4 className="text-3xl font-bold text-[#007AFF]">
                <CountUp start={0} end={16} duration={2.5} enableScrollSpy />
              </h4>
              <p className="text-gray-600 text-xl">Happy Clients</p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-medium mb-4">Team Members</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <img
              src="data:image/jpeg;base64,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"
              alt="Team Member"
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
            />
            <h4 className="text-lg font-medium">Mr. Mike Banding</h4>
            <p className="text-gray-500">Manager</p>
          </div>
          <div className="text-center">
            <img
              src="https://media.istockphoto.com/id/1088909778/photo/portrait-of-handsome-smiling-young-man-studio-shot.jpg?s=612x612&w=0&k=20&c=989h9CKzvxQ7-hXUnl7sNeIjJZYkiys7re7083JT4Es="
              alt="Team Member"
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
            />
            <h4 className="text-lg font-medium">Mr. Peter Pan</h4>
            <p className="text-gray-500">Developer</p>
          </div>
          <div className="text-center">
            <img
              src="https://media.istockphoto.com/id/1320651997/photo/young-woman-close-up-isolated-studio-portrait.jpg?s=612x612&w=0&k=20&c=lV6pxz-DknISGT2jjiSvUmSaw0hpMDf-dBpT8HTSAUI="
              alt="Team Member"
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
            />
            <h4 className="text-lg font-medium">Ms. Sophia</h4>
            <p className="text-gray-500">Designer</p>
          </div>
          <div className="text-center">
            <img
              src="https://t4.ftcdn.net/jpg/03/25/73/59/360_F_325735908_TkxHU7okor9CTWHBhkGfdRumONWfIDEb.jpg"
              alt="Team Member"
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
            />
            <h4 className="text-lg font-medium">Mr. John Lee</h4>
            <p className="text-gray-500">Chairman</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
