import React, { useEffect, useState } from "react";
import Navbar from "../../Commons/Navbar"; 
import { db } from "../../FireBase/Config"; 
import {set, get, ref} from 'firebase/database'
import StockEditModal from "../../StockEditModal/StockEditModal";
import { useSelector } from "react-redux";


const Stocks = () => { 
  const [data, setData] = useState([]);  
  const [selectedItem, setSelectedItem] = useState(null);  
  const [showModal, setShowModal] = useState(false);  
  const state = useSelector(state => state.auth); 

  useEffect(() => {
    const getDataRef = ref(db, 'products_management/device_types')
    
    get(getDataRef).then((res) => {
      setData(res.val()) 
    })
  }, [])  

  function touchStocks(version_list) { 
     
    let sum = 0; 
    for (let v=0; v < version_list.length; v++) { 
       
      if (version_list[v].version?.includes('TOUCH')) {
        sum += version_list[v].stock
      }
    } 
    return sum
  } 

  function controlStocks(version_list) {
    let sum = 0; 
    for (let v=0; v < version_list.length; v++) { 
       
      if (version_list[v].version?.includes('CONTROL')) {
        sum += version_list[v].stock
      }
    } 
    return sum
  }
  

  function updateStockFB(new_type) {
    const updateRef = ref(db, 'products_management/device_types')
    let total_count = 0; 
    for (let i=0; i<new_type.versions.length; i++) { 
      total_count = total_count + new_type.versions[i].stock; 
    }   
    new_type.stock = total_count;  
     
    const updated_list = data.map(d => d.type == new_type.type ? new_type : d)  
    
    set(updateRef, updated_list).then(() => {
      console.log('updated successfully!') 
      setData(updated_list); 
    })
  }

  return (
    <> 
    {showModal && <StockEditModal 
    selectedItem={selectedItem} updateStockFB={updateStockFB}
    showModal={showModal} setShowModal={setShowModal}/>}
    <Navbar /> 

    <div className="min-h-screen bg-gray-900 py-6">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-200 mb-6">Stocks Overview</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((item, index) => (
            <div 
              onClick={() => {  
                if  (state.user.role == 'owner') {
                  setShowModal(true) 
                  setSelectedItem(item)
                }
                
              }}
              key={index}
              className="bg-gray-800 cursor-pointer zoom-hover shadow-md rounded-lg border border-gray-700 p-4"
            >
              {/* Type and Stock */}
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-gray-100">
                  {item.type.toUpperCase()}
                </h2>
                <span className="text-sm text-gray-400">
                  Stock: {item.stock}
                </span>
              </div>

              {/* Versions */}
              {item.versions && (
                <div> 
                  {touchStocks(item.versions) != 0 && controlStocks(item.versions) != 0 && (
                    <> 
                     <div className="flex flex-col w-1/3 my-2 px-3 rounded-md bg-white bg-opacity-10 ">
                  <p className="font-semibold text-gray-300">Touch :  {touchStocks(item.versions)}</p>
                  <p className="font-semibold text-gray-300">Control : {controlStocks(item.versions)}</p> 
                  </div>
                    </>
                  )}
                  
                  <ul className="list-disc pl-5 space-y-1">
                    {item.versions.map((version, versionIndex) => (
                      <li
                        key={versionIndex}
                        className="text-gray-400 flex justify-between"
                      >
                        <span>{version.version}</span>
                        <span>Stock: {version.stock}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              
              
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default Stocks;
