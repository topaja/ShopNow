import React, { useState } from "react";
import Hero from "../components/Hero";
import Services from "../components/Services";
import ProductsCard from "../components/ProductsCard";
import { products } from "../data/products";

const Home = ({ onViewDetails }) => {
  let [flag, setFlag] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState(products); // State to store filtered products

  const updateView = (tagname) => {
    setFlag(true);
    const filtered = products.filter((product) => product.tag === tagname); // Filter products
    setFilteredProducts(filtered); // Update the filtered products state
  };
  return (
    <div>
      <Hero />
      <Services />
      <div className="flex justify-center items-center gap-4 pt-10">
        <div className="w-[70px] sm:w-[150px] h-1 bg-black border rounded-full"></div>
        <p className="text-xl">OUR PRODUCTS</p>
        <div className="w-[70px] sm:w-[150px] h-1 bg-black border rounded-full"></div>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-10 sm:gap-20 py-10">
        <p
          className="text-lg font-medium text-[#555] hover:text-black cursor-pointer"
          onClick={() => {
            setFlag(false); // Show all products
            setFilteredProducts(products); // Reset to all products
          }}
        >
          All
        </p>
        <p
          className="text-lg font-medium text-black cursor-pointer"
          onClick={() => updateView("Best Seller")}
        >
          Best Sellers
        </p>
        <p
          className="text-lg font-medium text-[#555] hover:text-black cursor-pointer"
          onClick={() => updateView("New")}
        >
          Latest
        </p>
      </div>

      {/* Render filtered products */}
      <div className="flex flex-wrap gap-4 p-4 justify-center">
        {filteredProducts.map((item) => (
          <ProductsCard
            product={item}
            key={item.id}
            onViewDetails={onViewDetails}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
