import React from "react";

export default function Header() {
  return (
    <header className="bg-gray-800 text-white body-font mb-2">
      <div className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center">
        <a
          href="/"
          className="flex  lg:w-1/5 title-font font-medium items-center text-white lg:items-center lg:justify-center mb-4 md:mb-0"
          aria-label="E-comm"
        >
          <span className=" text-2xl">E comm</span>
        </a>
        <nav
          className="flex lg:w-2/5 flex-wrap items-center  md:mx-auto"
          aria-label="Main Navigation"
        >
          <a href="/" className="border rounded-lg p-2  text-xl hover:text-gray-400" aria-label="Home">
            Home
          </a>
          <a href="#about" className=" border rounded-lg p-2 m-3 text-xl hover:text-gray-400" aria-label="About">
            About
          </a>
          <a href="/products" className="border rounded-lg p-2  text-xl hover:text-gray-400" aria-label="Products">
            Products
          </a>
        
        </nav>
        <button className="inline-flex items-center bg-indigo-500 border-0 py-1 px-3 focus:outline-none hover:bg-indigo-600 rounded text-base mt-4 md:mt-0">
          Sign Up
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </header>
  );
}
