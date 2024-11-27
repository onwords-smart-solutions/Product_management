import React, { useEffect, useState } from "react"; 
import { db } from '../../FireBase/Config';
import { get, set, ref } from 'firebase/database';
import Navbar from "../../Commons/Navbar";

function InputForm() {
  const [deviceType, setDeviceType] = useState("");
  const [productId, setProductId] = useState("");
  const [ide, setIde] = useState("");
  const [installationType, setInstallationType] = useState("");  
  const [deviceTypes, setDeviceTypes] = useState([]);  
  const [idFrom, setIDFrom] = useState(''); 
  const [idTo, setIDTo] = useState(''); 

  useEffect(() => {
    const deviceTypeRef = ref(db, 'products_management/device_types')
       get(deviceTypeRef).then((res) => {
        setDeviceTypes(res.val())
    })
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      deviceType,
      productId,
      ide,
      installationType,
    });
    alert("Form submitted!");
  };

  return ( 
    <>
    <Navbar />
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="max-w-lg w-full p-6 bg-gray-800 rounded-lg shadow-lg border-gray-700">
        <h2 className="text-3xl font-bold text-center text-gray-200 mb-6">
          Assign Product ID
        </h2>
        <div onSubmit={handleSubmit} className="space-y-5">
          {/* Device Type */}
          <div>
            <label
              htmlFor="deviceType"
              className="block text-gray-200 font-medium mb-1"
            >
              Device Type
            </label>
            <select
              id="deviceType"
              value={deviceType}
              onChange={(e) => setDeviceType(e.target.value)}
              className="w-full p-2 bg-gray-700 border border-gray-600 rounded-md text-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 hover:bg-gray-600"
              required
            >
              <option value="" disabled>
                Select Device Type
              </option> 
              {deviceTypes && deviceTypes.map((type) => ( 
                type.sub_types && ( 
                  type.sub_types.map((sub) => (
                    <option value={type.type} className="flex justify-between">{type.type}{sub.type}</option>
                  ))
                ) 
              ))
              } 
              {deviceTypes && deviceTypes.map((type) => ( 
                !type.sub_types && (
                  <option value={type.type} className="flex justify-between">{type.type}</option>
                ) 
              ))
              }
              
            </select>
          </div>

          {/* Product ID */}
          <div>
            <label
              htmlFor="productId"
              className="block text-gray-200 font-medium mb-1"
            >
              Product ID
            </label> 
            <div className="flex justify-between"> 
            <div className=""> 
            <small className="text-gray-200">From</small>
            <input
              type="text"
              id="number"
              value={idFrom}
              onChange={(e) => setIDFrom(e.target.value)}
              placeholder="Enter Product ID"
              className="w-full p-2 bg-gray-700 border border-gray-600 rounded-md text-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 hover:bg-gray-600"
              required
            /> 
            </div> 

            <div className=""> 
            <small className="text-gray-200">To</small>
            <input
              type="number"
              id="productId"
              value={idTo}
              onChange={(e) => setIDTo(e.target.value)}
              placeholder="Enter Product ID"
              className="w-full p-2 bg-gray-700 border border-gray-600 rounded-md text-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 hover:bg-gray-600"
              required
            /> 
            </div>
            </div>
          </div>

          {/* IDE */}
          <div>
            <label htmlFor="ide" className="block text-gray-200 font-medium mb-1">
              IDE
            </label>
            <select
              id="ide"
              value={ide}
              onChange={(e) => setIde(e.target.value)}
              className="w-full p-2 bg-gray-700 border border-gray-600 rounded-md text-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 hover:bg-gray-600"
              required
            >
              <option value="" disabled>
                Select IDE
              </option>
              <option value="arduino">ESP-IDF</option>
              <option value="vs-code">UNO</option>
            </select>
          </div>

          {/* Installation Type */}
          <div>
            <label
              htmlFor="installationType"
              className="block text-gray-200 font-medium mb-1"
            >
              Installation Type
            </label>
            <select
              id="installationType"
              value={installationType}
              onChange={(e) => setInstallationType(e.target.value)}
              className="w-full p-2 bg-gray-700 border border-gray-600 rounded-md text-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 hover:bg-gray-600"
              required
            >
              <option value="" disabled>
                Select Installation Type
              </option>
              <option value="manual">Smart Home</option>
              <option value="automated">Gate</option>
            </select>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-green-600 text-gray-200 font-bold py-2 rounded-md shadow-md hover:bg-green-500 active:bg-green-700"
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div> 
    </>
  );
}

export default InputForm;
