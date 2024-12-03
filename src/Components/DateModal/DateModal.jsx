import React, { useState } from "react";

const DateModal = (props) => {
  const [dateType, setDateType] = useState("single"); // single or range
  const [singleDate, setSingleDate] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleSubmit = () => {
    const data =
      dateType === "single"
        ? { startDate: singleDate, endDate: singleDate }
        : { startDate, endDate };

    props.handleDateFilter(data)
    props.setShowDateModal(false);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center">
      <div className="bg-gray-800 text-gray-300 p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-bold mb-4 text-white">Select Dates</h2>

        {/* Dropdown for Date Type */}
        <label className="block mb-4">
          <span className="text-gray-400">Select Date Type:</span>
          <select
            className="mt-1 block w-full bg-gray-700 text-gray-300 border-gray-600 rounded-md shadow-sm focus:ring focus:ring-green-400"
            value={dateType}
            onChange={(e) => setDateType(e.target.value)}
          >
            <option value="single">Single Date</option>
            <option value="range">Date Range</option>
          </select>
        </label>

        {/* Single Date Input */}
        {dateType === "single" && (
          <label className="block mb-4">
            <span className="text-gray-400">Select Date:</span>
            <input
              type="date"
              className="mt-1 block w-full bg-gray-700 text-gray-300 border-gray-600 rounded-md shadow-sm focus:ring focus:ring-green-400"
              value={singleDate}
              onChange={(e) => setSingleDate(e.target.value)}
            />
          </label>
        )}

        {/* Date Range Inputs */}
        {dateType === "range" && (
          <>
            <label className="block mb-2">
              <span className="text-gray-400">Start Date:</span>
              <input
                type="date"
                className="mt-1 block w-full bg-gray-700 text-gray-300 border-gray-600 rounded-md shadow-sm focus:ring focus:ring-green-400"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
            </label>

            <label className="block mb-4">
              <span className="text-gray-400">End Date:</span>
              <input
                type="date"
                className="mt-1 block w-full bg-gray-700 text-gray-300 border-gray-600 rounded-md shadow-sm focus:ring focus:ring-green-400"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />
            </label>
          </>
        )}

        {/* Buttons */}
        <div className="flex justify-end">
          <button
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md mr-2"
            onClick={() => props.setShowDateModal(false)}
          >
            Close
          </button>
          <button
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md"
            onClick={handleSubmit}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default DateModal;
