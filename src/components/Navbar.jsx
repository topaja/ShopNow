import React, { useState, useEffect, useRef } from "react";
import { Nav_assests } from "../assets/assests";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faShoppingCart,
  faUser,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../Redux/authSlice";
import { toast } from "react-toastify";
import { logoutAndClearCart } from "../Redux/authSlice";


const Navbar = () => {
  const [show, setShow] = useState(false);
  const [showLogout, setShowLogout] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const dropdownRef = useRef(null);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const cartItems = useSelector((state) => state.cart.cartItems);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowLogout(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

const handleLogout = () => {
  dispatch(logoutAndClearCart());
  setShowLogout(false);
  toast.info("Logged out successfully!");
  navigate("/home");
};

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm flex justify-between items-center p-4 w-full">
      {/* Logo */}
      <div className="w-[20%] flex justify-center ml-4">
        <Link to="/home">
          <img
            src={Nav_assests.logo}
            alt="logo"
            className="w-full sm:w-[80%] md:w-[60%]"
          />
        </Link>
      </div>

      {/* Desktop Navigation Links */}
      <ul className="hidden sm:flex justify-end items-center w-[60%] gap-10 pr-10">
        <Link to="/home">
          <li className="navItems linkHover">Home</li>
        </Link>
        <Link to="/about">
          <li className="navItems linkHover">About</li>
        </Link>
        <Link to="/contact">
          <li className="navItems linkHover">Contact</li>
        </Link>
      </ul>

      {/* Right Side Navigation */}
      <div className="flex items-center gap-6 sm:w-[20%] justify-end pr-4">
        {/* Cart Icon */}
        <Link to="/cart" className="relative">
          <FontAwesomeIcon
            icon={faShoppingCart}
            className="text-xl text-black hover:text-[#2577FD] transition-colors"
          />
          {cartItems.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
              {cartItems.length}
            </span>
          )}
        </Link>

        {/* User Profile/Login */}
        <div className="relative" ref={dropdownRef}>
          {isAuthenticated ? (
            <>
              <FontAwesomeIcon
                icon={faUser}
                onClick={() => setShowLogout(!showLogout)}
                className="text-xl text-black hover:text-[#2577FD] cursor-pointer transition-colors"
              />
              {showLogout && (
                <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg border border-gray-100">
                  <button
                    onClick={handleLogout}
                    className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 rounded-lg flex items-center gap-2 group"
                  >
                    <FontAwesomeIcon
                      icon={faSignOutAlt}
                      className="text-gray-400 group-hover:text-[#2577FD]"
                    />
                    <span className="group-hover:text-[#2577FD]">Logout</span>
                  </button>
                </div>
              )}
            </>
          ) : (
            <Link to="/login">
              <button className="rounded-full px-6 py-2 text-sm bg-[#2577FD] text-white btnHover transition-colors">
                Sign In
              </button>
            </Link>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="sm:hidden">
          <FontAwesomeIcon
            icon={show ? faTimes : faBars}
            className="text-xl cursor-pointer"
            onClick={() => setShow(!show)}
          />
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {show && (
        <div className="absolute top-full right-0 w-[200px] bg-white shadow-md sm:hidden text-center">
          <ul className="flex flex-col py-2">
            <Link to="/home" onClick={() => setShow(false)}>
              <li className="px-4 py-2 hover:bg-gray-50">Home</li>
            </Link>
            <Link to="/about" onClick={() => setShow(false)}>
              <li className="px-4 py-2 hover:bg-gray-50">About</li>
            </Link>
            <Link to="/contact" onClick={() => setShow(false)}>
              <li className="px-4 py-2 hover:bg-gray-50">Contact</li>
            </Link>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
