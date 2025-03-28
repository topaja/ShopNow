import React, { useState } from "react";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Details from "./components/Details";
import Login from "./pages/Login";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleViewDetails = (product) => {
    setSelectedProduct(product);
  };

  return (
    <div className="relative">
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        style={{
          fontSize: "14px",
          padding: "12px",
          minHeight: "unset",
        }}
        toastStyle={{
          backgroundColor: "#fff",
          color: "#333",
          boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
          padding: "12px 24px",
        }}
      />
      {/* Main Content */}
      <div
        className={selectedProduct ? "filter blur-[2px] transition-all" : ""}
      >
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={<Home onViewDetails={handleViewDetails} />}
          />
          <Route
            path="/home"
            element={<Home onViewDetails={handleViewDetails} />}
          />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </div>

      {/* Details Modal */}
      {selectedProduct && (
        <Details
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
};

export default App;
