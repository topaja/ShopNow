import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faMinus,
  faClose,
  faStar as faStarSolid,
} from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";
import {
  faFacebook,
  faPinterest,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../Redux/cartSlice";
import { toast } from "react-toastify";



const Details = ({ product, onClose }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const [quantity, setQuantity] = useState(1);

  // Check if item exists in cart
  const existingItem = cartItems.find((item) => item.id === product.id);

  // Set initial quantity to cart quantity if item exists
  useEffect(() => {
    if (existingItem) {
      setQuantity(existingItem.quantity);
    }
  }, [existingItem]);

  const handleQuantity = (type) => {
    if (type === "dec" && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
    if (type === "inc") {
      setQuantity((prev) => prev + 1);
    }
  };

  const handleAddToCart = () => {
    if (existingItem) {
      // If item exists, navigate to cart
      onClose();
      navigate("/cart");
    } else {
      // If item is new, add with selected quantity
      dispatch(
        addToCart({
          ...product,
          quantity,
        })
      );
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
      // onClose();
    }
  };

  // Add scroll lock effect
  useEffect(() => {
    // Prevent background scroll
    document.body.style.overflow = "hidden";

    // Cleanup function to re-enable scroll when component unmounts
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop with blur */}
      <div className="absolute inset-0 backdrop-blur-sm"></div>

      <div className="relative h-full flex items-center justify-center p-4">
        <div className="bg-white w-full max-w-3xl rounded-lg shadow-xl overflow-y-auto max-h-[90vh]">
          <div className="grid grid-cols-1 md:grid-cols-2 pt-10 relative">
            {/* Left: Product Image */}
            <div className="p-6 mt-5">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>

            {/* Right: Product Details */}
            <div className="p-6">
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute right-8 top-4 text-gray-400 hover:text-gray-600 text-xl"
              >
                <FontAwesomeIcon icon={faClose} />
              </button>
              <hr className="absolute top-14 right-0 left-0 h-1 border-[#DEE2E6]" />

              <div className="space-y-4 mt-5">
                {/* Product Title */}
                <h2 className="text-xl font-medium text-gray-900">
                  {product.name}
                </h2>

                {/* Rating Stars */}
                <div className="flex items-center gap-2">
                  <div className="flex">
                    <FontAwesomeIcon
                      icon={faStarSolid}
                      className="text-yellow-400"
                    />
                    <FontAwesomeIcon
                      icon={faStarSolid}
                      className="text-yellow-400"
                    />
                    <FontAwesomeIcon
                      icon={faStarSolid}
                      className="text-yellow-400"
                    />
                    <FontAwesomeIcon
                      icon={faStarSolid}
                      className="text-yellow-400"
                    />
                    <FontAwesomeIcon
                      icon={faStarRegular}
                      className="text-yellow-400"
                    />
                  </div>
                  <span className="text-sm text-gray-500">(4 Reviews)</span>
                </div>

                {/* Price */}
                <div className="text-2xl font-base text-green-500">
                  ₹{product.price}
                </div>

                {/* Product Description */}
                <div className="text-sm text-gray-600 leading-relaxed mb-6">
                  <p className="mb-4">{product.details}</p>
                  <p>- Lorem ipsum dolor.</p>
                  <p>- Lorem ipsum dolor sit.</p>
                  <p>- Lorem ipsum dolor.</p>
                </div>

                {/* Sample Colors - For Display Only */}
                <div>
                  <h3 className="text-sm font-medium mb-2">Color</h3>
                  <div className="flex gap-2">
                    <div className="w-4 h-4 rounded-full bg-black"></div>
                    <div className="w-4 h-4 rounded-full bg-blue-500"></div>
                    <div className="w-4 h-4 rounded-full bg-red-500"></div>
                  </div>
                </div>

                {/* Sample Sizes - For Display Only */}
                <div>
                  <h3 className="text-sm font-medium mb-2">Size</h3>
                  <div className="flex gap-2">
                    {["S", "M", "L", "XL"].map((size) => (
                      <button
                        key={size}
                        className="px-3 py-1 hover:bg-gray-300 bg-[#f1f2f6] text-sm"
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Quantity */}
                <div>
                  <h3 className="text-sm font-medium mb-2">Quantity</h3>
                  <div className="flex items-center w-max">
                    <button
                      className={`px-2 py-1 bg-[#F1F2F6] rounded-full ${
                        existingItem
                          ? "cursor-not-allowed opacity-50"
                          : "hover:bg-gray-300"
                      }`}
                      onClick={() => handleQuantity("dec")}
                      disabled={existingItem}
                    >
                      <FontAwesomeIcon icon={faMinus} />
                    </button>
                    <span className="px-4 py-1">{quantity}</span>
                    <button
                      className={`px-2 py-1 bg-[#F1F2F6] rounded-full ${
                        existingItem
                          ? "cursor-not-allowed opacity-50"
                          : "hover:bg-gray-300"
                      }`}
                      onClick={() => handleQuantity("inc")}
                      disabled={existingItem}
                    >
                      <FontAwesomeIcon icon={faPlus} />
                    </button>
                  </div>
                  {existingItem && (
                    <p className="text-xs text-gray-500 mt-1">
                      Quantity can be adjusted in cart
                    </p>
                  )}
                </div>
                <button
                  onClick={handleAddToCart}
                  className={`w-full py-3 rounded-full transition-colors ${
                    existingItem
                      ? "bg-green-500 hover:bg-green-600"
                      : "bg-[#007AFF] hover:bg-blue-600"
                  } text-white`}
                >
                  {existingItem ? "View Cart" : "Add to Cart"}
                </button>

                <div className="pt-4 border-t">
                  <p className="text-sm text-gray-600">
                    <span className="font-medium">Category:</span>{" "}
                    {product.category || "Fashion"}
                  </p>
                  <div className="flex gap-3 mt-6">
                    <button className="w-8 h-8 flex items-center justify-center rounded hover:text-[#007AFF] transition-colors">
                      <FontAwesomeIcon icon={faFacebook} />
                    </button>
                    <button className="w-8 h-8 flex items-center justify-center rounded hover:text-[#24A3F1] transition-colors">
                      <FontAwesomeIcon icon={faTwitter} />
                    </button>
                    <button className="w-8 h-8 flex items-center justify-center rounded hover:text-red-400 transition-colors">
                      <FontAwesomeIcon icon={faPinterest} />
                    </button>
                    <button className="w-8 h-8 flex items-center justify-center rounded hover:text-[#0A66C2] transition-colors">
                      <FontAwesomeIcon icon={faLinkedin} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
