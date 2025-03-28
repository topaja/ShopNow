import React from "react";
import {
  services_icon1,
  services_icon2,
  services_icon3,
  services_icon4
} from "../assets/assests";

const Services = () => {
  return (
    <div className="grid grid-cols-1 gap-y-8 py-16 px-8 sm:grid-cols-2 lg:grid-cols-4">
      <div className="flex gap-4 w-full  justify-center">
        <div>
          <img src={services_icon1} alt="icon1" className="w-15" />
        </div>
        <div className="flex flex-col gap-2">
          <p className="font-medium">Free Shipping</p>
          <p className="text-[#969696] text-sm">Free shipping on all order</p>
        </div>
      </div>
      <div className="flex gap-4 w-full  justify-center">
        <div>
          <img src={services_icon2} alt="icon2" className="w-12" />
        </div>
        <div className="flex flex-col gap-2">
          <p className="font-medium">Support 24/7</p>
          <p className="text-[#969696] text-sm">Free shipping on all order</p>
        </div>
      </div>
      <div className="flex gap-4 w-full  justify-center">
        <div>
          <img src={services_icon3} alt="icon3" className="w-12" />
        </div>
        <div className="flex flex-col gap-2">
          <p className="font-medium">Money Return</p>
          <p className="text-[#969696] text-sm">Free shipping on all order</p>
        </div>
      </div>
      <div className="flex gap-4 w-full  justify-center">
        <div>
          <img src={services_icon4} alt="icon4" className="w-12" />
        </div>
        <div className="flex flex-col gap-2">
          <p className="font-medium">Order Discount</p>
          <p className="text-[#969696] text-sm">Free shipping on all order</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
