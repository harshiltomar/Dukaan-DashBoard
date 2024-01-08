import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TransactionSubinfo from "./TransactionSubinfo";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";

const TransactionCard = () => {
  return (
    <div className="bg-grey-500 ml-96">
      <div className="flex">
        <h1 className="m-10 font-semibold text-3xl">Overview</h1>
        <div className="ml-auto mr-16 rounder-lg">
          <h1 className="m-10 font-semibold text-xl bg-white px-4 py-3 font-gray border">
            Last Month
            <FontAwesomeIcon
              icon={faSortDown}
              className="ml-2 text-gray-500 pb-1"
            />
          </h1>
        </div>
      </div>
      <div className="flex m-10">
        <div
          className="bg-white p-5 flex-col mr-10 shadow-md mb-4 rounded-lg"
          style={{ paddingRight: "32rem" }}
        >
          <h1 className="text-2xl">Online Orders</h1>
          <h1 className="text-5xl font-semibold mt-4">231</h1>
        </div>
        <div
          className="bg-white p-5 flex-col shadow-md mb-4 rounded-lg"
          style={{ paddingRight: "32rem" }}
        >
          <h1 className="text-2xl">Amount recieved</h1>
          <h1 className="text-5xl font-semibold mt-4">₹23,92,312.19</h1>
        </div>
      </div>
      <h1 className="m-10 font-semibold text-3xl">Transactions | This Month</h1>
      <TransactionSubinfo />
    </div>
  );
};

export default TransactionCard;
