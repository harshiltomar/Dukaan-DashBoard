import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faQuestionCircle,
  faSortDown,
  faBullhorn,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div className="w-screen bg-white border-b">
      <div className="ml-96 p-5">
        <div className="flex items-center">
          <h1 className="text-2xl font-semibold ml-7">Payments</h1>
          <div className="flex mx-2">
            <button className="text-gray-300 ml-5 mr-1">
              <FontAwesomeIcon icon={faQuestionCircle} />
            </button>
            <h1 className="mx-2 text-xl">How it works</h1>
          </div>
          <div className="mx-auto bg-zinc-100 p-4 -m-1 rounded-lg flex items-center">
            {/* Search bar */}
            <button className="text-gray-500 text-xl">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
            <h1 className="ml-3 text-xl mr-60 text-gray-500">
              Search features, tutorials, etc
            </h1>
          </div>
          <div className="ml-auto flex">
            {/* Shoutout button */}
            <button className="bg-gray-300 mx-2 p-3 px-4 rounded-full ">
              <FontAwesomeIcon icon={faBullhorn} />
            </button>
            {/* Heart button */}
            <button className="bg-gray-300 mx-2 -mt-1 px-5 rounded-full ">
              <FontAwesomeIcon icon={faSortDown} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
