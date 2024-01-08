import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faHome,
  faClipboardList,
  faBox,
  faTruck,
  faBullhorn,
  faChartBar,
  faMoneyBill,
  faTools,
  faTags,
  faUsers,
  faEye,
  faPlug,
} from "@fortawesome/free-solid-svg-icons";

const SideBar = () => {
  return (
    <div className="fixed h-full w-1/6 bg-slate-800">
      <div className="flex items-center justify-between m-2 p-2">
        <div className="mr-1">
          <img
            src="data:image/jpeg;base64,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"
            alt="Logo"
            className="h-16 rounded-sm mr-2"
          />
        </div>
        <div className="text-white flex flex-col -ml-12 mr-10">
          <h1 className="text-2xl mb-3">Nishyan</h1>
          <h4>
            <a href="/store" className="underline">
              Visit Store
            </a>
          </h4>
        </div>
        <div className="text-white cursor-pointer mr-5">
          <FontAwesomeIcon icon={faChevronDown} />
        </div>
      </div>
      <div className="m-5 text-white mt-10">
        <button className="flex items-center mb-3 text-gray-300 my-5">
          <FontAwesomeIcon icon={faHome} className="mr-6 text-3xl" />
          <h1 className="text-xl">Home</h1>
        </button>
        <button className="flex items-center mb-3 text-gray-300 my-5">
          <FontAwesomeIcon icon={faClipboardList} className="mr-8 text-3xl" />
          <h1 className="text-xl">Orders</h1>
        </button>
        <button className="flex items-center mb-3 text-gray-300 my-5">
          <FontAwesomeIcon icon={faBox} className="mr-7 text-3xl" />
          <h1 className="text-xl">Products</h1>
        </button>
        <button className="flex items-center mb-3 text-gray-300 my-5">
          <FontAwesomeIcon icon={faTruck} className="mr-4 text-3xl" />
          <h1 className="text-xl">Delivery</h1>
        </button>
        <button className="flex items-center mb-3 text-gray-300 my-5">
          <FontAwesomeIcon icon={faBullhorn} className="mr-6 text-3xl" />
          <h1 className="text-xl">Marketing</h1>
        </button>
        <button className="flex items-center mb-3 text-gray-300 my-5">
          <FontAwesomeIcon icon={faChartBar} className="mr-6 text-3xl" />
          <h1 className="text-xl">Analytics</h1>
        </button>
        <div className="bg-slate-600">
          <button className="flex items-center mb-3 text-gray-300 my-5">
            <FontAwesomeIcon icon={faMoneyBill} className="mr-5 text-3xl" />
            <h1 className="text-xl">Payments</h1>
          </button>
        </div>
        <button className="flex items-center mb-3 text-gray-300 my-5">
          <FontAwesomeIcon icon={faTools} className="mr-6 text-3xl" />
          <h1 className="text-xl">Tools</h1>
        </button>
        <button className="flex items-center mb-3 text-gray-300 my-5">
          <FontAwesomeIcon icon={faTags} className="mr-6 text-3xl" />
          <h1 className="text-xl">Discounts</h1>
        </button>
        <button className="flex items-center mb-3 text-gray-300 my-5">
          <FontAwesomeIcon icon={faUsers} className="mr-4 text-3xl" />
          <h1 className="text-xl">Audience</h1>
        </button>
        <button className="flex items-center mb-3 text-gray-300 my-5">
          <FontAwesomeIcon icon={faEye} className="mr-4 text-3xl" />
          <h1 className="text-xl">Appearences</h1>
        </button>
        <button className="flex items-center mb-3 text-gray-300 my-5">
          <FontAwesomeIcon icon={faPlug} className="mr-7 text-3xl" />
          <h1 className="text-xl">Plugins</h1>
        </button>
      </div>
    </div>
  );
};

export default SideBar;
