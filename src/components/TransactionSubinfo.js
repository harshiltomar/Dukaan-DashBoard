import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faSort,
  faDownload,
  faSortDown,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons"; // Assuming you have a custom magnifying glass icon in your project

const TransactionSubinfo = () => {
  const renderTransactionInfoRows = () => {
    // Create an array with 19 elements (you can adjust the count as needed)
    const rows = Array.from({ length: 19 }, (_, index) => (
      <div
        key={index}
        className="flex space-x-60 m-5 ml-8 font-semibold border-b border-gray-300 pb-2"
      >
        <h1 className="text-blue-500 text-xl">#281209</h1>
        <h1 className="text-xl">7 July, 2023</h1>
        <h1 className="text-xl">Rs.1,278.23</h1>
        <h1 className="text-xl">Rs.22</h1>
      </div>
    ));

    return rows;
  };

  return (
    <div className="bg-white ml-10 mr-24">
      <div className="flex">
        <div className="flex mx-5 mt-4 border rounded p-4">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="text-gray-800 p-1 text-xl"
          />
          <h1 className="mx-4 text-gray-500 text-xl mr-24">
            Search by Order ID...
          </h1>
        </div>
        <div className="ml-auto flex flex-row">
          <div className="flex m-2 mt-4 mx-4 border rounded p-2 text-xl">
            <h1 className="mx-4 text-gray-700 pt-2">Sort</h1>
            <FontAwesomeIcon icon={faSort} className="text-gray-500 p-3" />
          </div>
          <div className="flex m-2 mt-4 mx-4 border rounded p-2 pt-4">
            <FontAwesomeIcon
              icon={faDownload}
              className="text-gray-500 p-1 text-xl px-2"
            />
          </div>
        </div>
      </div>
      <div className="bg-zinc-100 flex space-x-60 text-xl p-4 m-5 rounded-sm font-semibold text-gray-500">
        <h1>Order ID</h1>
        <div className="flex items-center">
          <h1>Order date</h1>
          <FontAwesomeIcon
            icon={faSortDown}
            className="ml-2 text-gray-500 pb-1"
          />
        </div>
        <h1>Order amount</h1>
        <div className="flex items-center">
          <h1>Transaction fees</h1>
          <FontAwesomeIcon icon={faInfoCircle} className="ml-2 text-gray-500" />
        </div>
      </div>
      {renderTransactionInfoRows()}
      <div className="flex flex-row">
        <div className="flex">
          <FontAwesomeIcon icon={faMagnifyingGlass} className="text-white" />
          <h1>Previous</h1>
        </div>
        <div className="flex">
          <h1>Next</h1>
          <FontAwesomeIcon icon={faMagnifyingGlass} className="text-white" />
        </div>
      </div>
    </div>
  );
};

export default TransactionSubinfo;
