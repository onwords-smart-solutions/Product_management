import React, { useEffect, useState } from 'react';
import Navbar from '../../Commons/Navbar';
import { db } from '../../FireBase/Config';
import { get, set, ref } from 'firebase/database';

function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [data, setData] = useState([]);

  const enter_data = [
    { type: "Smart Home" },
    { type: "Gate" },
  ];

  useEffect(() => {
    const dataRefdb = ref(db, 'products_management/products');
    get(dataRefdb)
      .then((snapshot) => {
        const filteredData = snapshot.val();
        console.log(filteredData);
        setData(filteredData || []);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  function sendToFirebase() {
    const sendRef = ref(db, 'products_management/installation_types');
    set(sendRef, enter_data).then(() => {
      console.log('Successfully sent data to Firebase!');
    });
  }

  return (
    <>
      <Navbar />
      <div className="bg-gray-900 text-gray-300 min-h-screen">
        <div className="container mx-auto px-4 py-6">
          {/* Search Input */}
          <div className="mb-6">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-md px-3 py-2 border border-gray-700 bg-gray-800 text-gray-300 placeholder-gray-500 focus:ring-2 focus:ring-green-400 focus:outline-none shadow-sm"
            />
          </div>

          {/* Send Button */}
          <button
            onClick={sendToFirebase}
            className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-md shadow-md transition"
          >
            Send to Firebase
          </button>

          {/* Table */}
          <div className="mt-6 overflow-x-auto rounded-lg shadow-md">
            <table className="min-w-full bg-gray-800 text-left text-gray-300">
              <thead className="bg-gray-700">
                <tr>
                  <th className="py-2 px-4 border-b border-gray-700">Date</th>
                  <th className="py-2 px-4 border-b border-gray-700">Product ID</th>
                  <th className="py-2 px-4 border-b border-gray-700">Product Type</th>
                  <th className="py-2 px-4 border-b border-gray-700">Version</th>
                  <th className="py-2 px-4 border-b border-gray-700">Installation Type</th>
                  <th className="py-2 px-4 border-b border-gray-700">Entered By</th>
                </tr>
              </thead>
              <tbody>
                {data.length > 0 ? (
                  data.map((item, index) => (
                    <tr
                      key={index}
                      className="hover:bg-gray-700 text-center transition"
                    >
                      <td className="py-2 px-4 border-b border-gray-700">{item.date}</td>
                      <td className="py-2 px-4 border-b border-gray-700">{item.product_id}</td>
                      <td className="py-2 px-4 border-b border-gray-700">{item.product_type}</td>
                      <td className="py-2 px-4 border-b border-gray-700">{item.version}</td>
                      <td className="py-2 px-4 border-b border-gray-700">{item.installation_type}</td>
                      <td className="py-2 px-4 border-b border-gray-700">{item.user}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan="6"
                      className="py-4 px-4 text-center border-b border-gray-700 text-gray-500"
                    >
                      No data available
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
