import { Product } from "../items/Product";
import React from "react";

export const ProductArea: React.FC<{ areaName: string }> = ({ areaName }) => {
  return (
    <div className="relative p-4 px-4 z-10">
      <h1 className="text-2xl font-bold mb-4 text-black">{areaName}</h1>

      {/* Grid de produtos */}
      <div className="max-w-screen grid grid-cols-2 md:grid-cols-3 justify-items-center gap-4">
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
};
