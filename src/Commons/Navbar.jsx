import React, { useEffect, useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../Redux/AuthSlice"; 
import DateModal from "../Components/DateModal/DateModal";

const Navbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = ["Assign", "Stocks", "Products", "entries"]
  const [selectedItem, setSelectedItem] = useState(navItems[0]); 
  const state = useSelector(state => state.auth);  
  const [showDateModal, setShowDateModal] = useState(false); 

  const location = useLocation(); 
  const navigate = useNavigate();  
  const dispatch = useDispatch(); 


  return ( 
    <>
    <nav className="bg-gray-900 border-b border-gray-800 shadow-md"> 
    {showDateModal && 
    <DateModal showDateModal={showDateModal} setShowDateModal={setShowDateModal} 
    handleDateFilter={props.handleDateFilter}/>
    }
   

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
                  className={`text-gray-300 hover:text-green-400 text-sm ${location.pathname == '/' && 'border-b-2 border-green-400'} font-medium px-3 py-2`}
                  onClick={() => {navigate('/')}}
                 >
                  Stocks
                </button> 
                {(state.user.role == 'owner' || state.user.role == 'editor') && (
                  <>
                   <button
                  className={`text-gray-300 hover:text-green-400 text-sm font-medium ${location.pathname == '/assign' && 'border-b-2 border-green-400'} px-3 py-2`}
                  onClick={() => {navigate('/assign')}}
                >
                  Assign
                </button>
                  </>
                )}
               
                
                {(state.user.role == 'owner' || state.user.role == 'editor') && (
                  <>
                   <button
                  className={`text-gray-300 hover:text-green-400 text-sm ${location.pathname == '/products/' && 'border-b-2 border-green-400'} font-medium px-3 py-2`}
                  onClick={() => {navigate('/products/')}}
                >
                  Products
                </button>
                  </>
                )} 
                  <button
                   onClick={() => setShowDateModal(true)}
                    className="bg-gray-600 my-2 text-gray-200 w-32 font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-gray-800 hover:text-white transition duration-300 focus:outline-none focus:ring-2 focus:ring-gray-700"
                  >
                    Select Date
                  </button> 

                  <button className="text-gray-300">Total: {props.totalProducts}</button>
               
              
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
              
              onClick={() => {navigate('/')}}
              className={`block text-left w-full px-3 py-2 rounded-lg text-gray-300 hover:bg-gray-700 hover:text-white`}
            >
              Stock
            </button> 

            <button
              
              onClick={() => {navigate('/assign/')}}
              className={`block text-left w-full px-3 py-2 rounded-lg text-gray-300 hover:bg-gray-700 hover:text-white `}
            >
              Assign
            </button>

            <button
             
             onClick={() => {navigate('/products/')}}
              className={`block text-left w-full px-3 py-2 rounded-lg text-gray-300 hover:bg-gray-700 hover:text-white `}
            >
              Products
            </button>
           
          <button
         onClick={() => {
          dispatch(logOut()) 
          navigate('/login/')
        }
        }
          className="block w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-lg text-center shadow-md">
            Sign Out
          </button>
        </div>
      </div>
    </nav> 
    </>
  );
};

export default Navbar;
