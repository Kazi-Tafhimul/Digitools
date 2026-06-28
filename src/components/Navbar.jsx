import React from "react";

const Navbar = ({ cartCount = 0 }) => {
  return (
   
    <div className="w-full bg-base-100/95 backdrop-blur-md shadow-sm sticky top-0 z-50">
      
     
      <div className="navbar px-4 md:px-8 max-w-7xl mx-auto">
        
        <div className="navbar-start">
          <div className="dropdown">
            <button tabIndex={0} className="btn btn-ghost lg:hidden p-0 pr-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </button>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-gray-600 font-medium">
              <li><a>Products</a></li>
              <li><a>Features</a></li>
              <li><a>Pricing</a></li>
              <li><a>Testimonials</a></li>
              <li><a>FAQ</a></li>
            </ul>
          </div>
          
          <a className="text-2xl font-bold text-[#7C3AED] tracking-tight cursor-pointer">
            DigiTools
          </a>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2 text-gray-600 font-medium">
            <li><a className="hover:text-[#7C3AED]">Products</a></li>
            <li><a className="hover:text-[#7C3AED]">Features</a></li>
            <li><a className="hover:text-[#7C3AED]">Pricing</a></li>
            <li><a className="hover:text-[#7C3AED]">Testimonials</a></li>
            <li><a className="hover:text-[#7C3AED]">FAQ</a></li>
          </ul>
        </div>

        <div className="navbar-end gap-4">
          <div className="dropdown dropdown-end">
            <button className="btn btn-ghost btn-circle">
              <div className="indicator">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                {cartCount > 0 && (
                  <span className="badge badge-sm badge-primary bg-[#7C3AED] border-none indicator-item text-white">
                    {cartCount}
                  </span>
                )}
              </div>
            </button>
          </div>

          <button className="text-gray-600 font-medium hover:text-[#7C3AED] hidden sm:inline-block">
            Login
          </button>

          <button className="btn bg-[#7C3AED] hover:bg-[#6D28D9] text-white rounded-full px-6 min-h-0 h-10 border-none normal-case">
            Get Started
          </button>
        </div>

      </div>
    </div>
  );
}

export default Navbar;