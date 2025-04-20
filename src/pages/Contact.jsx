import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faPinterest,
  faTumblr,
  faVimeo,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
    <>
      <div className="flex justify-center items-center gap-4 pt-10 pb-5">
        <div className="w-[70px] sm:w-[150px] h-1 bg-black border rounded-full"></div>
        <p className="text-xl">CONTACT US</p>
        <div className="w-[70px] sm:w-[150px] h-1 bg-black border rounded-full"></div>
      </div>
      <div className="container mx-auto px-4 py-8 mb-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 items-center">
          {/* Left Section: Contact Info */}
          <div className="space-y-8 justify-self-center bg-[#F3F3F3] py-8 px-4 sm:px-8 md:px-12 lg:px-20 mb-10 lg:mb-0 w-full">
            {/* Phone */}
            <div className="flex items-center gap-4">
              <FontAwesomeIcon
                icon={faPhone}
                className="text-2xl text-gray-600"
              />
              <div>
                <p className="text-gray-700">+91 34567 67890</p>
                <p className="text-gray-700">+91 34567 67890</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-4">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="text-2xl text-gray-600"
              />
              <div>
                <p className="text-gray-700">shopnow_support@email.com</p>
                <p className="text-gray-700">shopnow.com</p>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-center gap-4">
              <FontAwesomeIcon
                icon={faMapMarkerAlt}
                className="text-2xl text-gray-600"
              />
              <div>
                <p className="text-gray-700">Lorem ipsum dolor,</p>
                <p className="text-gray-700">street, Crossroad 123.</p>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-lg font-medium mb-4">Follow Us</h3>
              <div className="flex gap-4 text-gray-600">
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="text-xl cursor-pointer hover:text-blue-600"
                />
                <FontAwesomeIcon
                  icon={faPinterest}
                  className="text-xl cursor-pointer hover:text-red-600"
                />
                <FontAwesomeIcon
                  icon={faTumblr}
                  className="text-xl cursor-pointer hover:text-blue-400"
                />
                <FontAwesomeIcon
                  icon={faVimeo}
                  className="text-xl cursor-pointer hover:text-blue-500"
                />
                <FontAwesomeIcon
                  icon={faTwitter}
                  className="text-xl cursor-pointer hover:text-blue-400"
                />
              </div>
            </div>
          </div>

          {/* Right Section: Contact Form */}
          <div className="justify-self-center">
            <h3 className="text-lg font-medium mb-6">Get In Touch</h3>
            <form className="space-y-4">
              {/* Name and Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Name*"
                  className="w-full p-3 border border-gray-300 rounded"
                  required
                />
                <input
                  type="email"
                  placeholder="Email*"
                  className="w-full p-3 border border-gray-300 rounded"
                  required
                />
              </div>

              {/* Subject */}
              <input
                type="text"
                placeholder="Subject*"
                className="w-full p-3 border border-gray-300 rounded"
                required
              />

              {/* Message */}
              <textarea
                placeholder="Your Message*"
                className="w-full p-3 border border-gray-300 rounded h-32"
                required
              ></textarea>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full px-4 py-3 bg-black text-white rounded hover:bg-gray-800 transition-all duration-200"
              >
                SEND
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
