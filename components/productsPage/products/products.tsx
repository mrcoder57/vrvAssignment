// components/productsPage/products/products.js
import React from 'react';
import ProductsCards from './productsCards';

const Products = () => {
  return (
    <div className="flex lg:flex-row flex-wrap items-start justify-around w-full h-full bg-[#F5F6FA] gap-6 lg:px-6 px-3 py-7">
      {/* Ensuring the cards are spread out */}
      <ProductsCards />
      <ProductsCards />
      <ProductsCards />
    </div>
  );
};

export default Products;
