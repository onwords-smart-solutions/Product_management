import React, { useEffect, useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logOut } from "../Redux/AuthSlice";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = ["Assign", "Stocks", "Products", "entries"]
  const [selectedItem, setSelectedItem] = useState(navItems[0]); 
  const location = useLocation(); 
  
  const navigate = useNavigate();  
  const dispatch = useDispatch(); 


  return (
    <nav className="bg-gray-900 border-b border-gray-800 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Left Section: Logo + Navigation Links */}
          <div className="flex">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <img className="h-8 w-auto" src="/applogo.png" alt="Logo" />
            </div>
            {/* Navigation Links (Desktop) */}
            <div className="hidden sm:ml-8 sm:flex sm:space-x-6">
                <button
                  className={`text-gray-300 hover:text-green-400 text-sm font-medium ${location.pathname == '/' && 'border-b-2 border-green-400'} px-3 py-2`}
                  onClick={() => {navigate('/')}}
                >
                  Assign
                </button>
                <button
                  className={`text-gray-300 hover:text-green-400 text-sm ${location.pathname == '/stocks/' && 'border-b-2 border-green-400'} font-medium px-3 py-2`}
                  onClick={() => {navigate('/stocks/')}}
                >
                  Stocks
                </button>
                <button
                  className={`text-gray-300 hover:text-green-400 text-sm ${location.pathname == '/products/' && 'border-b-2 border-green-400'} font-medium px-3 py-2`}
                  onClick={() => {navigate('/products/')}}
                >
                  Products
                </button>
              
            </div>
          </div>

          {/* Right Section: Sign-Out Button */}
          <div className="hidden sm:flex sm:items-center">
            <button
            onClick={() => {
              dispatch(logOut()) 
              navigate('/login/')
            }
            }
            className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md">
              Sign Out
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <XIcon className="h-6 w-6" aria-hidden="true" />
              ) : (
                <MenuIcon className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${isOpen ? "block" : "hidden"} sm:hidden`}>
        <div className="px-4 pb-3 pt-2 space-y-2">
         
            <button
              
              onClick={() => {
                ' '
              }}
              className={`block text-left w-full px-3 py-2 rounded-lg text-gray-300 hover:bg-gray-700 hover:text-white `}
            >
              item
            </button>

            <button
              
              onClick={() => {
                ' '
              }}
              className={`block text-left w-full px-3 py-2 rounded-lg text-gray-300 hover:bg-gray-700 hover:text-white`}
            >
              item
            </button>

            <button
             
              onClick={() => {
                ' '
              }}
              className={`block text-left w-full px-3 py-2 rounded-lg text-gray-300 hover:bg-gray-700 hover:text-white `}
            >
              item
            </button>
           
          <button className="block w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-lg text-center shadow-md">
            Sign Out
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
