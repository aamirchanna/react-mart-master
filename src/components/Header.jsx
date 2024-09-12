import React from "react";

export default function Header() {
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <nav
          className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto"
          aria-label="Main Navigation"
        >
          <a href="/" className="mr-5 hover:text-gray-900" aria-label="Home">
            Home
          </a>
          <a href="#about" className="mr-5 hover:text-gray-900" aria-label="About">
            About
          </a>
          {/* Change 'News' to 'Products' and set link */}
          <a href="/products" className="mr-5 hover:text-gray-900" aria-label="Products">
            Products
          </a>
          <a href="#contact" className="hover:text-gray-900" aria-label="Contact Us">
            Contact Us
          </a>
        </nav>
        <a
          href="/"
          className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0"
          aria-label="AQ Mart"
        >
          <span className="ml-3 text-xl">AQ Mart</span>
        </a>
      </div>
    </header>
  );
}
