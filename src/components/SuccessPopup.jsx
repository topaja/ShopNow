import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const SuccessPopup = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 backdrop-blur-sm"></div>
      <div className="relative bg-white rounded-lg p-12 text-center shadow-xl w-full max-w-lg mx-auto">
        <FontAwesomeIcon
          icon={faCheckCircle}
          className="text-8xl text-green-500 mb-6"
        />
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Order Placed Successfully!
        </h2>
        <p className="text-gray-600 mb-8">Thank you for your purchase.</p>
        <button
          onClick={onClose}
          className="px-8 py-3 bg-[#007AFF] text-white rounded-lg hover:bg-blue-600 text-lg font-medium transition-colors"
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default SuccessPopup;
