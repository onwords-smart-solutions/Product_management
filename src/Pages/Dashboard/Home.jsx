import React, { useEffect, useState } from 'react';
import Navbar from '../../Commons/Navbar';
import { db } from '../../FireBase/Config';
import { get, ref } from 'firebase/database';
import Loading from '../../Components/Loading/Loading';
import { useSelector } from 'react-redux';

function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState('full_product_id'); // Default filter
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]); // For date filtering
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;
  const [loading, setLoading] = useState(true);
  const state = useSelector((state) => state.auth);
  const [totalProducts, setTotalProducts] = useState(0);

  // Function to filter data by date range
  const handleDateFilter = (dateObj) => {
    const { startDate, endDate } = dateObj;

    if (!startDate || !endDate) {
      console.warn('Start Date or End Date is missing');
      return;
    }

    // Parse start and end dates
    const start = new Date(startDate);
    const end = new Date(endDate);

    // Filter data within the date range
    const filteredByDate = data.filter((item) => {
      const itemDate = new Date(item.date); // Assuming item.date is a valid date string
      return itemDate >= start && itemDate <= end;
    });

    // Update filtered data state
    setFilteredData(filteredByDate);
    setCurrentPage(1); // Reset to the first page
  };

  const deleteProduct = (product_id) => {
    const dataRefdb = ref(db, 'products_management/products');

    get(dataRefdb)
      .then((snapshot) => {
        const currentData = snapshot.val();

        const new_data = currentData.filter(
          (data) => data.full_product_id !== product_id
        );

        set(dataRefdb, new_data).then(() => {
          console.log('updated successfully!');
          setData(data.filter((d) => d.full_product_id !== product_id));
        });
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };

  useEffect(() => {
    const dataRefdb = ref(db, 'products_management/products');

    get(dataRefdb)
      .then((snapshot) => {
        const fetchedData = snapshot.val();
        const reverseSortedProducts = fetchedData.reverse();

        setData(reverseSortedProducts);
        setFilteredData(reverseSortedProducts); // Initially, no date filter
        setTotalProducts(reverseSortedProducts.length);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const searchFilteredData = filteredData.filter((item) =>
    item[filterType]?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = searchFilteredData.slice(
    startIndex,
    startIndex + itemsPerPage
  );
  const totalPages = Math.ceil(searchFilteredData.length / itemsPerPage);

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const getPaginationRange = () => {
    const delta = 2; // Number of pages to show around the current page
    const range = [];
    for (
      let i = Math.max(2, currentPage - delta);
      i <= Math.min(totalPages - 1, currentPage + delta);
      i++
    ) {
      range.push(i);
    }
    if (currentPage - delta > 2) {
      range.unshift('...');
    }
    if (currentPage + delta < totalPages - 1) {
      range.push('...');
    }
    return [1, ...range, totalPages].filter(
      (value, index, self) => self.indexOf(value) === index
    );
  };

  return (
    <>
      {loading && <Loading />}
      <Navbar totalProducts={totalProducts} handleDateFilter={handleDateFilter} />
      <div className="bg-gray-900 text-gray-300 min-h-screen">
        <div className="container mx-auto px-4 py-6">
          {/* Filter Controls */}
          <div className="mb-6 flex space-x-4">
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="rounded-md px-3 py-2 border border-gray-700 bg-gray-800 text-gray-300 placeholder-gray-500 focus:ring-2 focus:ring-green-400 focus:outline-none shadow-sm"
            >
              <option value="full_product_id">Product ID</option>
              <option value="product_type">Product Type</option>
              <option value="user">Entered By</option>
            </select>
            <input
              type="text"
              placeholder={`Search by ${filterType.replace('_', ' ')}`}
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
                  <th className="py-2 px-4 border-b border-gray-700">Installation Type</th>
                  <th className="py-2 px-4 border-b border-gray-700">Entered By</th>
                  <th className="py-2 px-4 border-b border-gray-700"></th>
                </tr>
              </thead>
              <tbody>
                {paginatedData.length > 0 ? (
                  paginatedData.map((item, index) => (
                    <tr key={index} className="hover:bg-gray-700 text-center transition">
                      <td className="py-2 px-4 border-b border-gray-700">{item.date}</td>
                      <td className="py-2 px-4 border-b border-gray-700">{item.full_product_id}</td>
                      <td className="py-2 px-4 border-b border-gray-700">{item.product_type}</td>
                      <td className="py-2 px-4 border-b border-gray-700">
                        {item.installation_type ? item.installation_type : ''}
                      </td>
                      <td className="py-2 px-4 border-b border-gray-700">{item.user}</td>
                      <td className="py-2 px-4 border-b border-gray-700 font-bold text-red-500">
                        {state.user.role === 'owner' && (
                          <button
                            onClick={() => {
                              deleteProduct(item.full_product_id);
                            }}
                            className="bg-gray-300 bg-opacity-15 hover:bg-opacity-20 active:bg-opacity-30 px-2 rounded-md pb-1"
                          >
                            x
                          </button>
                        )}
                      </td>
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
