import React, { useEffect, useState, version } from 'react'

function StockEditModal(props) {  

    const [currentObject, setCurrentObject] = useState(); 

    useEffect(() => {
        console.log(props.selectedItem);  
        setCurrentObject(props.selectedItem);
    }, []) 

    function changeValue(value, version) {
        const updatedVersions = currentObject.versions.map(v => 
            v.version === version ? { ...v, stock: value } : v
        );
    
        console.log(version, value);
        setCurrentObject({
            ...currentObject,
            versions: updatedVersions,
        });
    }
    

  return (
    <div  
    
    className="fixed inset-0 bg-black z-40 bg-opacity-30 flex justify-center">
        <div className="flex justify-between bg-gray-600 shadow-xl w-full md:w-1/3 sm:w-1/2 h-2/3 my-auto rounded-xl">
        <div border
              className="bg-gray-800 flex-grow cursor-pointer zoom-hover shadow-md rounded-lg border border-gray-700 p-4"
            >
              {/* Type and Stock */} 
              <div className="flex flex-row justify-between mb-3">
                
                <button className="invisible">x</button>
                <button 
                onClick={() => props.setShowModal(false)}
                className="border px-3 rounded-md pb-1 hover:bg-white hover:bg-opacity-5 active:bg-white active:bg-opacity-15 text-white">x</button> 

                </div>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-gray-100">
                  {currentObject?.type.toUpperCase()}
                </h2>
                <span className="text-sm text-gray-400">
                  Stock: {currentObject?.stock}
                </span>
              </div>

              {/* Versions */}
              {currentObject?.versions && (
                <div>
                  <h3 className="text-lg font-medium text-gray-300 mb-2">
                    Versions:
                  </h3>
                  <ul className="list-disc pl-5 space-y-1">
                    {currentObject?.versions.map((version, versionIndex) => (
                      <li
                        key={versionIndex}
                        className="text-gray-400 flex justify-between"
                      >
                        <span>{version.version}</span>
                        <input type="text" className="w-12 text-center text-gray-800 rounded-md " 

                        onChange={(e) => changeValue(e.target.value, version.version)}

                        value={version.stock}/>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Sub-types */}
              {currentObject?.sub_types && (
                <div>
                  <h3 className="text-lg font-medium text-gray-300 mt-4 mb-2">
                    Sub-types:
                  </h3>
                  <div className="space-y-3">
                    {currentObject?.sub_types.map((subType, subIndex) => (
                      <div
                        key={subIndex}
                        className="bg-gray-700 p-3 rounded-lg border border-gray-600"
                      >
                        <div className="flex justify-between items-center">
                          <span className="text-gray-300 font-medium">
                            {subType.type.toUpperCase()}
                          </span>
                          <span className="text-sm text-gray-400">
                            Stock: {subType.stock}
                          </span>
                        </div>
                        <ul className="list-disc pl-5 mt-2">
                          {subType.versions.map((version, versionIndex) => (
                            <li
                              key={versionIndex}
                              className="text-gray-400 text-sm"
                            >
                              {version.version}: {version.stock}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
        </div>
    </div>
  )
}

export default StockEditModal