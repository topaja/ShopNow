import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLock,
  faUser,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { login, register } from "../Redux/authSlice";
import { toast } from "react-toastify";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const users = useSelector((state) => state.auth.users);
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    phone: "",
  });

  // Validation functions
  const validatePhone = (phone) => {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 6;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isLogin) {
      // Check if user exists
      const user = users.find(
        (u) => u.email === formData.email && u.password === formData.password
      );
      if (user) {
        dispatch(login(user));
        toast.success("Login successful!");
        navigate(-1);
      } else {
        toast.error("Invalid credentials!");
      }
    } else {
      // Register new user
      if (
        !formData.name ||
        !formData.email ||
        !formData.password ||
        !formData.phone
      ) {
        toast.error("Please fill all fields!");
        return;
      }

      // Validate phone number
      if (!validatePhone(formData.phone)) {
        toast.error("Please enter a valid 10-digit phone number!");
        return;
      }

      // Validate email
      if (!validateEmail(formData.email)) {
        toast.error("Please enter a valid email address!");
        return;
      }

      // Validate password
      if (!validatePassword(formData.password)) {
        toast.error("Password must be at least 6 characters long!");
        return;
      }

      // Check if email already exists
      const existingUser = users.find((u) => u.email === formData.email);
      if (existingUser) {
        toast.error("Email already registered!");
        return;
      }

      dispatch(register(formData));
      dispatch(login(formData));
      toast.success("Registration successful!");
      navigate(-1);
    }
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    if (name === "phone") {
      // Allow only numbers
      const onlyNums = value.replace(/[^0-9]/g, "");
      setFormData({
        ...formData,
        [name]: onlyNums,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-lg">
        {/* Toggle Buttons */}
        <div className="flex rounded-lg bg-gray-100 p-1">
          <button
            className={`flex-1 py-2 rounded-lg text-sm font-medium transition-colors ${
              isLogin
                ? "bg-[#007AFF] text-white"
                : "text-gray-500 hover:text-gray-700"
            }`}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button
            className={`flex-1 py-2 rounded-lg text-sm font-medium transition-colors ${
              !isLogin
                ? "bg-[#007AFF] text-white"
                : "text-gray-500 hover:text-gray-700"
            }`}
            onClick={() => setIsLogin(false)}
          >
            Register
          </button>
        </div>

        {/* Form Title */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            {isLogin ? "Welcome Back!" : "Create Account"}
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            {isLogin
              ? "Please sign in to your account"
              : "Please fill in your details"}
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          {/* Registration Fields */}
          {!isLogin && (
            <>
              <div className="relative">
                <FontAwesomeIcon
                  icon={faUser}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInput}
                  className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#007AFF]"
                  placeholder="Full Name"
                />
              </div>

              <div className="relative">
                <FontAwesomeIcon
                  icon={faPhone}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInput}
                  maxLength={10}
                  className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#007AFF]"
                  placeholder="Phone Number (10 digits)"
                />
              </div>
            </>
          )}

          {/* Common Fields */}
          <div className="relative">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInput}
              required
              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#007AFF]"
              placeholder="Email Address"
            />
          </div>

          <div className="relative">
            <FontAwesomeIcon
              icon={faLock}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInput}
              required
              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#007AFF]"
              placeholder="Password"
            />
          </div>

          {/* Login Extras */}
          {isLogin && (
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="h-4 w-4 text-[#007AFF] focus:ring-[#007AFF] border-gray-300 rounded"
                />
                <label className="ml-2 block text-sm text-gray-900">
                  Remember me
                </label>
              </div>
              <div className="text-sm">
                <button
                  type="button"
                  className="font-medium text-[#007AFF] hover:text-blue-500"
                >
                  Forgot password?
                </button>
              </div>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-[#007AFF] text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            {isLogin ? "Sign In" : "Create Account"}
          </button>

          {/* Form Footer */}
          <p className="text-center text-sm text-gray-600">
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <button
              type="button"
              onClick={() => setIsLogin(!isLogin)}
              className="font-medium text-[#007AFF] hover:text-blue-500"
            >
              {isLogin ? "Register" : "Login"}
            </button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
