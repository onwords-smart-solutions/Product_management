import React, { useEffect, useState } from "react"; 
import { db } from '../../FireBase/Config';
import { get, ref, set  } from 'firebase/database';
import Navbar from "../../Commons/Navbar";
import { todayFormatted } from "../../Commons/DatePad"; 
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
 
 

function InputForm() {
  const [deviceType, setDeviceType] = useState("");
  const [productId, setProductId] = useState("");
  const [ide, setIde] = useState("");
  const [installationType, setInstallationType] = useState("");  
  const [deviceTypes, setDeviceTypes] = useState([]);  
  const [idFrom, setIDFrom] = useState(''); 
  const [idTo, setIDTo] = useState(''); 
  const [versions, setVersions] = useState([]);  
  const [version, setVersion] = useState('');  
  const [uniqueError, setUniqueError] = useState(''); 
  const state = useSelector(state => state.auth); 
  const [viewVersions, setViewVersions] = useState([]); 
  const navigate = useNavigate()

  useEffect(() => {
    const deviceTypeRef = ref(db, 'products_management/device_types') 
    const versionRef = ref(db, 'products_management/versions')  
    ; 
    

    get(versionRef).then((res) => {
      setVersions(res.val()); 
    })

    get(deviceTypeRef).then((res) => {
    setDeviceTypes(res.val());  
   
    }) 
    
  }, [])

  const AddProductSubmit = () => { 

    const dataRefdb = ref(db, 'products_management/products');
    get(dataRefdb)
      .then((snapshot) => {
        const currentData = snapshot.val(); 
          
          const new_data = [...currentData]  

          let  foundDuplicate = false;  

          let current_id = idFrom; 
          while (current_id < Number(idTo) + 1) { 

            const new_product_id = deviceType + current_id;   
            const filtered_uniques = currentData.filter((data) => data.full_product_id == new_product_id);  

            if (!filtered_uniques.length) {
              new_data.push({
                date: todayFormatted(), 
                full_product_id: new_product_id, 
                ide, 
                product_id_number: current_id, 
                product_type: deviceType, 
                user: state?.user?.email,
                }
              ) 
            } 
            else {
              foundDuplicate = true
            } 
            current_id++; 

           
        }
           
          if (!foundDuplicate) {
          set(dataRefdb, new_data).then(() => {
            console.log('updated successfully!') 
            setUniqueError('') 
            navigate('/products/')
          }) 
          } 
          else(setUniqueError('product id/s already exists!'))

        
  
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
 
   
   } 

   function suna() {
    const addAllRef = ref(db, 'products_management/device_types')  
  
      // set(addAllRef, enter_data).then(() => {
      //   console.log('added succw')
      // })
    
     
   }

  return ( 
    <> 
    {/* <button
    onClick={suna}
    >Hi</button> */}
    <Navbar />
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="max-w-lg w-full p-6 bg-gray-800 rounded-lg shadow-lg border-gray-700">
        <h2 className="text-3xl font-bold text-center text-gray-200 mb-6">
          Assign Product ID
        </h2>
        <div className="space-y-5">
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
              onChange={(e) => {
                setDeviceType(e.target.value) 
                setViewVersions(deviceTypes.filter(type => type.type == deviceType)[0].versions)
                 
              }
                
              }
              className="w-full p-2 bg-gray-700 border border-gray-600 rounded-md text-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 hover:bg-gray-600"
              required
            >
              <option value="" disabled>
                Select Device Type & version
              </option> 
              {deviceTypes && deviceTypes.map((type) => ( 
                type.sub_types && ( 
                  type.sub_types.map((sub) => (
                    <option value={`${type.type}${sub.type}`} className="flex justify-between">{type.type}{sub.type}</option>
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


            <select
              id="deviceType"
              value={version}
              onChange={(e) => setVersion(e.target.value)}
              className="w-full p-2 mt-2 bg-gray-700 border border-gray-600 rounded-md text-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 hover:bg-gray-600"
              required
            >
              <option value="" disabled>
                Select Version
              </option> 

              {viewVersions && viewVersions.map((version) => ( 
                
                  <option value={version.version} className="flex justify-between">{version.version}</option>
               
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
            <small className="text-red-500">{uniqueError}</small>
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
              <option value="ESP-IDF">ESP-IDF</option>
              <option value="UNO">UNO</option>
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
              <option value="Smart Home">Smart Home</option>
              <option value="Gate">Gate</option>
            </select>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="button" 
              onClick={() => AddProductSubmit()}
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
