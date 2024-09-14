import React from 'react';

function Banner(props) {
    return (
        <div>

          <div className="relative bg-gray-800 text-white">
      <img
        src="https://th.bing.com/th/id/OIP.CNxLBD0JWuN7SRmD8k_MEAHaDF?w=1920&h=800&rs=1&pid=ImgDetMain"
        alt="Ecommerce Banner"
        className="w-full h-96 object-cover opacity-50"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <h1 className="text-5xl font-bold mb-4">Welcome to Our Store</h1>
        <p className="text-xl mb-6">Find the best products at unbeatable prices</p>
        <button className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
          Shop Now
        </button>
      </div>
    </div>   
        </div>
    );
}

export default Banner;