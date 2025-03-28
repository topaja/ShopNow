import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faPlus,
  faMinus,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";
import {
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
  clearCart,
} from "../Redux/cartSlice";
import { toast } from "react-toastify";
import SuccessPopup from "../components/SuccessPopup";

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showAllItems, setShowAllItems] = useState(false);

  const displayedItems = showAllItems ? cartItems : cartItems.slice(0, 4);

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
    toast.error("Item removed from cart");
  };

  const handleIncrement = (id) => {
    dispatch(incrementQuantity(id));
  };

  const handleDecrement = (id) => {
    dispatch(decrementQuantity(id));
  };

  const handleClearCart = () => {
    if (cartItems.length > 0) {
      dispatch(clearCart());
      toast.warning("Cart has been cleared!");
    }
  };

  const handleCheckout = () => {
    if (!isAuthenticated) {
      navigate("/login");
      return;
    }
    setShowSuccess(true);
    dispatch(clearCart());
  };

  const cartTotal = cartItems.reduce(
    (total, item) =>
      total + parseFloat(item.price.replace(/,/g, "")) * item.quantity,
    0
  );

  return (
    <div className="container mx-auto px-4 py-8 text-sm">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3 space-y-6">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead className="border border-gray-300">
                <tr className="bg-gray-100">
                  <th className="p-4 font-medium text-[#333333]">IMAGE</th>
                  <th className="p-4 font-medium text-[#333333]">
                    PRODUCT NAME
                  </th>
                  <th className="p-6 font-medium text-[#333333]">UNIT PRICE</th>
                  <th className="p-6 font-medium text-[#333333]">QTY</th>
                  <th className="p-6 font-medium text-[#333333]">SUBTOTAL</th>
                  <th className="p-6 font-medium text-[#333333]">ACTION</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.length > 0 ? (
                  <>
                    {displayedItems.map((item) => (
                      <tr
                        key={item.id}
                        className="text-center border-b border-gray-300"
                      >
                        <td className="p-6">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-16 h-16 object-contain mx-auto"
                          />
                        </td>
                        <td className="p-6 text-nowrap">{item.name}</td>
                        <td className="p-6">₹{item.price}</td>
                        <td className="p-6">
                          <div className="flex items-center justify-center gap-4">
                            <button
                              className="px-2 py-1 bg-gray-200 rounded-full hover:bg-gray-300"
                              onClick={() => handleDecrement(item.id)}
                              disabled={item.quantity === 1}
                            >
                              <FontAwesomeIcon icon={faMinus} />
                            </button>
                            <span>{item.quantity}</span>
                            <button
                              className="px-2 py-1 bg-gray-200 rounded-full hover:bg-gray-300"
                              onClick={() => handleIncrement(item.id)}
                            >
                              <FontAwesomeIcon icon={faPlus} />
                            </button>
                          </div>
                        </td>
                        <td className="p-6">
                          ₹
                          {parseFloat(item.price.replace(/,/g, "")) *
                            item.quantity}
                        </td>
                        <td className="p-6">
                          <button
                            className="hover:text-red-500"
                            onClick={() => handleRemove(item.id)}
                          >
                            <FontAwesomeIcon icon={faTrash} />
                          </button>
                        </td>
                      </tr>
                    ))}
                    {cartItems.length > 4 && (
                      <tr>
                        <td colSpan="6" className="p-4 text-center">
                          <button
                            onClick={() => setShowAllItems(!showAllItems)}
                            className="text-[#007AFF] hover:text-[#2577FD] font-medium transition-colors"
                          >
                            {showAllItems
                              ? "Show Less"
                              : `View ${cartItems.length - 4} More Items`}
                          </button>
                        </td>
                      </tr>
                    )}
                  </>
                ) : (
                  <tr>
                    <td colSpan="6" className="p-4 text-center text-gray-500">
                      Your cart is empty.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          <div className="flex justify-end items-center gap-4">
            <Link to="/home">
              <button className="px-10 py-3 bg-[#F3F4F6] text-[#555] rounded-full hover:bg-[#333333] hover:text-white transition-all">
                CONTINUE SHOPPING
              </button>
            </Link>
            <button
              className="px-10 py-3 bg-[#F3F4F6] text-[#555] rounded-full hover:bg-[#333333] hover:text-white transition-all"
              onClick={handleClearCart}
            >
              CLEAR SHOPPING CART
            </button>
          </div>
        </div>

        <div className="lg:col-span-1 space-y-8">
          <div className="border border-gray-300 p-4 rounded-lg">
            <h3 className="text-lg font-medium mb-4">Cart Total</h3>
            <div className="flex justify-between mb-4">
              <span>Total products</span>
              <span className="font-medium">₹{cartTotal}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Shipping Charges</span>
              <span className="line-through text-green-400">₹130.00</span>
            </div>
            <hr className="my-5" />
            <div className="flex justify-between font-medium text-lg mb-4">
              <span>Grand Total</span>
              <span className="text-green-500">₹{cartTotal}</span>
            </div>
            <button
              onClick={handleCheckout}
              disabled={cartItems.length === 0}
              className={`w-full px-4 py-3 rounded-full transition-all ${
                cartItems.length === 0
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-[#007AFF] hover:bg-[#333333]"
              } text-white`}
            >
              PROCEED TO CHECKOUT
            </button>
            {cartItems.length === 0 && (
              <p className="text-red-500 text-xs mt-2 text-center">
                Please add items to cart before checkout
              </p>
            )}
          </div>
        </div>
      </div>

      {showSuccess && (
        <SuccessPopup
          onClose={() => {
            setShowSuccess(false);
            navigate("/home");
          }}
        />
      )}
    </div>
  );
};

export default Cart;