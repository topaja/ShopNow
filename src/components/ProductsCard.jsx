import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faEye,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../Redux/cartSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const ProductsCard = ({ product, onViewDetails }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.cartItems);

  // Check if product is already in cart
  const isInCart = cartItems.some((item) => item.id === product.id);

const handleAddToCart = () => {
  if (isInCart) {
    navigate("/cart"); // Navigate to cart page
  } else {
    dispatch(addToCart(product));
    // Updated toast notification
    toast.success("Item added to cart", {
      position: "bottom-right",
      autoClose: 2000,
      style: {
        backgroundColor: "#fff",
        color: "#333",
        boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
        borderLeft: "4px solid #28a745",
        padding: "12px 24px",
        fontSize: "14px",
      },
    });
  }
};
  return (
    <div className="w-[280px] h-[450px] bg-white rounded-lg shadow-lg p-4 group relative overflow-hidden mb-8">
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-contain rounded-t-lg"
        />
        {product.tag && (
          <span
            className={`absolute top-2 right-2 bg-gradient-to-r text-white text-xs font-semibold px-4 py-1 rounded-md ${
              product.tag === "New"
                ? "from-[#1488CC] to-[#2B32B2]"
                : "from-[#00c6ff] to-[#0072ff]"
            }`}
          >
            {product.tag}
          </span>
        )}
      </div>
      <div className="mt-4">
        <h3 className="text-md font-medium">{product.name}</h3>
        <h3 className="text-sm font-base text-[#838383] mt-1">{product.category}</h3>
        <div className="flex items-center mt-2">
          <span className="text-yellow-400">★</span>
          <span className="text-yellow-400">★</span>
          <span className="text-yellow-400">★</span>
          <span className="text-gray-300">★</span>
          <span className="text-gray-300">★</span>
        </div>
        <div className="mt-2">
          <span className="text-lg font-bold text-green-600">
            ₹{product.price}
          </span>
        </div>
      </div>

      {/* Hover Effect */}
      <div className="absolute bottom-0 left-0 w-full bg-[#007AFF] text-white flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button
          className={`flex items-center gap-2 w-[85%] justify-center hover:bg-black py-2 ${
            isInCart ? "bg-green-600 hover:bg-green-500" : ""
          }`}
          onClick={handleAddToCart}
        >
          <FontAwesomeIcon icon={isInCart ? faCartShopping : faShoppingCart} />
          {isInCart ? "View Cart" : "Add To Cart"}
        </button>
        <button
          className="w-[15%] flex items-center justify-center hover:bg-black py-3"
          onClick={() => onViewDetails(product)}
        >
          <FontAwesomeIcon icon={faEye} />
        </button>
      </div>
    </div>
  );
};

export default ProductsCard;