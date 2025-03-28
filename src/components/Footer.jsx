import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { Nav_assests } from "../assets/assests";

const Footer = () => {
   const scrollToTop = () => {
     window.scrollTo({
       top: 0,
       behavior: "smooth",
     });
   };
  return (
    <footer className="bg-gray-100 py-10 font-medium">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 px-8">
          <div className="md:col-span-1">
            <img src={Nav_assests.logo} alt="" className="w-40" />
            <p className="mt-2 text-[#555] text-sm">
              © 2025 ShowNow. All Rights Reserved
            </p>
          </div>

          <div>
            <h3 className="text-base mb-4">ABOUT US</h3>
            <ul className="text-[#555] text-sm">
              <li className="mb-2">
                <a href="#" className="linkHover">
                  About us
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="linkHover">
                  Store location
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="linkHover">
                  Contact
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="linkHover">
                  Orders tracking
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-base mb-4">USEFUL LINKS</h3>
            <ul className="text-[#555] text-sm">
              <li className="mb-2">
                <a href="#" className="linkHover">
                  Returns
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="linkHover">
                  Support Policy
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="linkHover">
                  Size guide
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="linkHover">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-base mb-4">FOLLOW US</h3>
            <ul className="text-[#555] text-sm">
              <li className="mb-2">
                <a href="#" className="linkHover">
                  Facebook
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="linkHover">
                  Twitter
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="linkHover">
                  Instagram
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="linkHover">
                  Youtube
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-base mb-4">SUBSCRIBE</h3>
            <p className="mb-4 text-[#555] text-sm">
              Get E-mail updates about our latest shop and special offers.
            </p>
            <form>
              <input
                type="email"
                placeholder="Enter your email here.."
                className="w-full p-2 mb-2 border border-gray-300 rounded text-sm"
              />
              <button
                type="submit"
                className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 text-sm"
              >
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="fixed bottom-4 right-4">
        <button
          className="w-12 h-12  flex items-center justify-center bg-gradient-to-r from-[#1488CC] to-[#2B32B2] text-white p-4 rounded-full shadow-lg"
          onClick={scrollToTop}
        >
          <FontAwesomeIcon icon={faArrowUp} />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
