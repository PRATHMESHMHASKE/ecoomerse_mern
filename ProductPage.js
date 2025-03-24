

import React from "react";
const ProductPage = () => {
  const products = [
    { id: 1, name: "Laptop", price: "$999" },
    { id: 2, name: "Phone", price: "$499" },
    { id: 3, name: "Headphones", price: "$199" }
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Products</h2>
      <div className="grid grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-gray-600">{product.price}</p>
            <button className="bg-blue-500 text-white px-4 py-2 mt-2 rounded">Buy Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ProductPage;
