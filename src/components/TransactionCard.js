import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TransactionSubinfo from "./TransactionSubinfo";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";

const TransactionCard = () => {
  return (
    <div className="ml-60 mr-10 overflow-x-hidden bg-zinc-100">
      <div className="flex my-10 items-center">
        <h1 className="m-10 mb-4 font-semibold text-2xl pb-2">Overview</h1>
        <h1 className=" ml-auto mt-4 mr-10 rounded-lg font-semibold bg-white px-3 py-2 font-gray border">
          Last Month
          <FontAwesomeIcon
            icon={faSortDown}
            className="ml-2 text-gray-500 pb-1"
          />
        </h1>
      </div>
      <div className="flex m-10 -mt-8">
        <div className="bg-white p-5 pr-96 flex-col mr-10 shadow-md mb-4 rounded-lg">
          <h1>Online Orders</h1>
          <h1 className="text-4xl font-semibold mt-4">231</h1>
        </div>
        <div className="bg-white p-5 pr-60 flex-col shadow-md mb-4 rounded-lg">
          <h1 className="">Amount recieved</h1>
          <h1 className="text-4xl font-semibold mt-4">₹23,92,312.19</h1>
        </div>
      </div>
      <h1 className="m-10 font-semibold text-2xl">Transactions | This Month</h1>
      <TransactionSubinfo />
    </div>
  );
};

export default TransactionCard;
