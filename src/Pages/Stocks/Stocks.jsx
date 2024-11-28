import React from "react";
import { enter_data as data } from "../../utils/HardData";
import Navbar from "../../Commons/Navbar";

const Stocks = () => {
  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-gray-900 py-6">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-200 mb-6">Stocks Overview</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((item, index) => (
            <div
              key={index}
              className="bg-gray-800 shadow-md rounded-lg border border-gray-700 p-4"
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
                  <h3 className="text-lg font-medium text-gray-300 mb-2">
                    Versions:
                  </h3>
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

              {/* Sub-types */}
              {item.sub_types && (
                <div>
                  <h3 className="text-lg font-medium text-gray-300 mt-4 mb-2">
                    Sub-types:
                  </h3>
                  <div className="space-y-3">
                    {item.sub_types.map((subType, subIndex) => (
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
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default Stocks;