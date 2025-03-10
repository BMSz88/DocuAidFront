import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
          <a href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              DocuAid
            </a>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <div className="relative group">
              <button className="flex items-center space-x-1 text-gray-600 hover:text-indigo-600">
                <span>Product</span>
                <ChevronDown size={16} />
              </button>
              <div className="absolute top-full -left-4 w-48 bg-white shadow-lg rounded-md py-2 hidden group-hover:block">
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50">Features</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50">Benefits</a>
              </div>
            </div>
            <a href="/enterprise" className="text-gray-600 hover:text-indigo-600">Enterprise</a>
            <a href="/pricing" className="text-gray-600 hover:text-indigo-600">Pricing</a>
            <a href="/help-center" className="text-gray-600 hover:text-indigo-600">Help Center</a>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button className="px-4 py-2 text-indigo-600 hover:text-indigo-700">Sign Up</button>
            <button className="px-4 py-2 text-indigo-600 hover:text-indigo-700">Log In</button>
            <button   className="px-4 py-2 rounded-md text-black bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:opacity-90">
              Add to Chrome
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="block px-3 py-2 text-gray-600 hover:bg-indigo-50 rounded-md">Products</a>
            <a href="#" className="block px-3 py-2 text-gray-600 hover:bg-indigo-50 rounded-md">Solutions</a>
            <a href="#" className="block px-3 py-2 text-gray-600 hover:bg-indigo-50 rounded-md">Resources</a>
            <a href="#" className="block px-3 py-2 text-gray-600 hover:bg-indigo-50 rounded-md">Company</a>
            <div className="pt-4 flex flex-col space-y-2">
              <button className="px-4 py-2 text-indigo-600 hover:text-indigo-700">Sign In</button>
              <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
                Request Demo
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;