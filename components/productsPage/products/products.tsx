// components/productsPage/products/products.js
import React from 'react';
import ProductsCards from './productsCards';

const Products = () => {
  return (
    <div className="flex flexx-row items-start justify-around w-full h-full bg-[#F5F6FA] gap-6 px-6 py-7">
      {/* Ensuring the cards are spread out */}
      <ProductsCards />
      <ProductsCards />
      <ProductsCards />
    </div>
  );
};

export default Products;
