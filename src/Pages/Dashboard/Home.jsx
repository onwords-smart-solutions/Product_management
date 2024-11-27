import React, { useEffect, useState } from 'react';
import Navbar from '../../Commons/Navbar';
import { db } from '../../FireBase/Config';
import { get, set, ref } from 'firebase/database';
import new_list from '../../Commons/plingo';

function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    const dataRefdb = ref(db, 'products_management/products');
    get(dataRefdb)
      .then((snapshot) => {
        const fetchedData = snapshot.val();
        console.log(fetchedData);
        setData(fetchedData || []);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const filteredData = data.filter((item) =>
    item.full_product_id.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = filteredData.slice(startIndex, startIndex + itemsPerPage);
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const getPaginationRange = () => {
    const delta = 2; // Number of pages to show around the current page
    const range = [];
    for (let i = Math.max(2, currentPage - delta); i <= Math.min(totalPages - 1, currentPage + delta); i++) {
      range.push(i);
    }
    if (currentPage - delta > 2) {
      range.unshift('...');
    }
    if (currentPage + delta < totalPages - 1) {
      range.push('...');
    }
    return [1, ...range, totalPages].filter((value, index, self) => self.indexOf(value) === index);
  };

  return (
    <>
      <Navbar />
      <div className="bg-gray-900 text-gray-300 min-h-screen">
        <div className="container mx-auto px-4 py-6">
          {/* Search Input */}
          <div className="mb-6">
            <input
              type="text"
              placeholder="Search by Product ID..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1); // Reset to the first page after search
              }}
              className="w-full rounded-md px-3 py-2 border border-gray-700 bg-gray-800 text-gray-300 placeholder-gray-500 focus:ring-2 focus:ring-green-400 focus:outline-none shadow-sm"
            />
          </div>

          {/* Table */}
          <div className="mt-6 overflow-x-auto rounded-lg shadow-md">
            <table className="min-w-full bg-gray-800 text-left text-gray-300">
              <thead className="bg-gray-700">
                <tr className="text-center">
                  <th className="py-2 px-4 border-b border-gray-700">Date</th>
                  <th className="py-2 px-4 border-b border-gray-700">Product ID</th>
                  <th className="py-2 px-4 border-b border-gray-700">Product Type</th>
                  <th className="py-2 px-4 border-b border-gray-700">Version</th>
                  <th className="py-2 px-4 border-b border-gray-700">Installation Type</th>
                  <th className="py-2 px-4 border-b border-gray-700">Entered By</th>
                </tr>
              </thead>
              <tbody>
                {paginatedData.length > 0 ? (
                  paginatedData.map((item, index) => (
                    <tr key={index} className="hover:bg-gray-700 text-center transition">
                      <td className="py-2 px-4 border-b border-gray-700">{item.date}</td>
                      <td className="py-2 px-4 border-b border-gray-700">{item.full_product_id}</td>
                      <td className="py-2 px-4 border-b border-gray-700">{item.product_type}</td>
                      <td className="py-2 px-4 border-b border-gray-700">{item.version}</td>
                      <td className="py-2 px-4 border-b border-gray-700">
                        {item.installation_type ? item.installation_type : 'bulk entry'}
                      </td>
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

          {/* Pagination Controls */}
          <div className="mt-6 flex justify-center items-center space-x-2">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              className={`px-4 py-2 rounded-md shadow-md transition ${
                currentPage === 1
                  ? 'bg-gray-600 text-gray-500 cursor-not-allowed'
                  : 'bg-green-600 hover:bg-green-700 text-white'
              }`}
              disabled={currentPage === 1}
            >
              &lt;
            </button>
            {getPaginationRange().map((page, index) => (
              <button
                key={index}
                onClick={() => typeof page === 'number' && handlePageChange(page)}
                className={`px-4 py-2 rounded-md shadow-md transition ${
                  currentPage === page
                    ? 'bg-green-700 text-white'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
                disabled={typeof page !== 'number'}
              >
                {page}
              </button>
            ))}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              className={`px-4 py-2 rounded-md shadow-md transition ${
                currentPage === totalPages
                  ? 'bg-gray-600 text-gray-500 cursor-not-allowed'
                  : 'bg-green-600 hover:bg-green-700 text-white'
              }`}
              disabled={currentPage === totalPages}
            >
              &gt;
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
