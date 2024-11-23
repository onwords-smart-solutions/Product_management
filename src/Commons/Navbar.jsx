// src/components/Navbar.jsx
import React, { useEffect, useState } from 'react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); 

  const navItems = [ 'Products', 'Stocks', 'Versions', 'Installation type'] 
  const [selectedItem, setSelectedItem] = useState(navItems[0]) 

  return (
    <nav className="bg-green-800 border-b border-green-200 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 pb-1">
          <div className="flex">
            <div className="flex mt-7">
              <img
                className="h-8 w-8"
                src="/applogo.png"
                alt="Company Logo"
              />
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-3">
                {navItems.map((item) => (
                    <button key={item}
                    className={` text-gray-200
                    inline-flex items-end w-32 px-1 pt-1 ${selectedItem && selectedItem == item && 'border-b-2 border-lime-300'} text-sm font-medium`}
                    onClick={() => setSelectedItem(item)}
                    >
                        {item} 
                    </button>
                ))}
              
              
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <button className="bg-green-300 hover:bg-green-700 text-pink-950 font-bold py-2 px-4 rounded">
              Sign Out
            </button>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-green-500 inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-green-700 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <XIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <MenuIcon className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      <div className={`${isOpen ? 'block' : 'hidden'} sm:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <a
            href="#"
            className="text-green-800 block px-3 py-2 rounded-md text-base font-medium"
          >
            Dashboard
          </a>
          <a
            href="#"
            className="text-gray-500 hover:text-green-800 block px-3 py-2 rounded-md text-base font-medium"
          >
            Team
          </a>
          <a
            href="#"
            className="text-gray-500 hover:text-green-800 block px-3 py-2 rounded-md text-base font-medium"
          >
            Projects
          </a>
          <a
            href="#"
            className="text-gray-500 hover:text-green-800 block px-3 py-2 rounded-md text-base font-medium"
          >
            Calendar
          </a>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-full">
            Sign Out
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
