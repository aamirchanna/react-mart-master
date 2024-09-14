

function Footer() {
    return (
      
     <footer className="bg-gray-800 w-full text-white body-font">
      <div className="container  py-8 px-5 flex flex-wrap  items-center">
        <div className="flex md:flex-nowrap flex-wrap justify-center items-end md:justify-start">
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <a href="/" className="flex title-font font-medium items-center text-white">
              <span className="ml-3 text-xl">E comm</span>
            </a>
            <p className="mt-2 text-sm text-gray-400">Your one-stop shop for all your needs.</p>
          </div>
          <div className=" flex flex-wrap  md:text-left ">
            <div className=" md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">Quick Links</h2>
              <nav className="list-none mb-10">
                <li>
                  <a href="/" className="text-gray-400 hover:text-white">Home</a>
                </li>
                <li>
                  <a href="#about" className="text-gray-400 hover:text-white">About</a>
                </li>
                <li>
                  <a href="/products" className="text-gray-400 hover:text-white">Products</a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-400 hover:text-white">Contact Us</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">Follow Us</h2>
              <nav className="list-none mb-10">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">Facebook</a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">Twitter</a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">Instagram</a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">LinkedIn</a>
                </li>
              </nav>
            </div>
          </div>
        </div>
        <div className="w-full mt-8 md:mt-0 md:w-auto  md:text-left">
          <p className="text-gray-400 text-sm">© 2024 E comm — All Rights Reserved</p>
        </div>
      </div>
    </footer>



      
    );
}

export default Footer;