import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch random products from an API
    axios.get('https://dummyjson.com/products')
      .then((res) => {
        // Shuffle the products array to get random products
        const shuffledProducts = res.data.products.sort(() => 0.5 - Math.random());
        // Select the first 5 products from the shuffled array
        setProducts(shuffledProducts.slice(0, 5));
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container mx-auto py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="border rounded-lg p-4 shadow-lg">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-full h-48 object-contain mb-4 rounded"
            />
            <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
            <p className="text-gray-700 mb-4">{product.description}</p>
            <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
              View Product
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
