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
        className="flex m-5 ml-8 text-sm border-b border-gray-300 pb-2"
      >
        <h1 className="text-blue-500 text-xl mr-40">#281209</h1>
        <h1 className="text-xl mr-52">7 July, 2023</h1>
        <h1 className="text-xl mr-64">Rs.1,278.23</h1>
        <h1 className="text-xl">Rs.22</h1>
      </div>
    ));

    return rows;
  };

  return (
    <div className="bg-white ml-10 rounded-lg">
      <div className="flex flex-row ">
        <div className="mx-auto border p-2 m-1 rounded-lg flex ml-5 mt-3 h-10">
          <button className="text-gray-500 ml-2 text-sm">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
          <h1 className="ml-3 mr-20 text-gray-500">Search by Order Id...</h1>
        </div>
        <div className="ml-auto flex flex-row">
          <div className="mx-auto border p-2 m-1 px-0 rounded-lg ml-5 mt-3 h-10 flex items-center">
            <h1 className="mx-4 text-gray-700">Sort</h1>
            <FontAwesomeIcon icon={faSort} className="text-gray-500 pl-1 p-3" />
          </div>
          <div className="mx-auto border p-2 m-1 rounded-lg flex ml-5 h-10 mt-3 mr-5">
            <FontAwesomeIcon
              icon={faDownload}
              className="text-gray-500 p-1 text-xl px-2"
            />
          </div>
        </div>
      </div>
      <div className="bg-zinc-100 flex text-xl p-4 m-3 rounded-sm font-semibold">
        <h2 className="mr-40">Order ID</h2>
        <div className="flex items-center mr-40">
          <h3>Order date</h3>
          <FontAwesomeIcon
            icon={faSortDown}
            className="ml-2 text-gray-500 pb-1"
          />
        </div>
        <h3 className="mr-30">Order amount</h3>
        <div className=" ml-32 flex items-center">
          <h3>Transaction fees</h3>
          <FontAwesomeIcon icon={faInfoCircle} className="ml-2 text-gray-500" />
        </div>
      </div>
      {renderTransactionInfoRows()}
      <div className="flex flex-row justify-center p-5">
        <div className="flex">
          <FontAwesomeIcon icon={faMagnifyingGlass} className="text-white" />
          <h1 className="border p-1 px-2">Previous</h1>
        </div>
        <h1 className="mx-3 p-1">1</h1>
        <h1 className="mx-3 p-1">...</h1>
        <h1 className="mx-3 p-1 px-2 text-white bg-blue-500 rounded-sm">10</h1>
        <h1 className="mx-3 p-1">11</h1>
        <h1 className="mx-3 p-1">12</h1>
        <h1 className="mx-3 p-1">13</h1>
        <h1 className="mx-3 p-1">14</h1>
        <h1 className="mx-3 p-1">15</h1>
        <h1 className="mx-3 p-1">16</h1>
        <h1 className="mx-3 p-1">17</h1>
        <h1 className="mx-3 p-1">18</h1>
        <div className="flex">
          <h1 className="border p-1 px-2">Next</h1>
          <FontAwesomeIcon icon={faMagnifyingGlass} className="text-white" />
        </div>
      </div>
    </div>
  );
};

export default TransactionSubinfo;
