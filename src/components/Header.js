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
    <div className="wr-6/10 bg-white border-b">
      <div className="ml-52 p-2">
        <div className="flex items-center">
          <h1 className="text-xl ml-16 pb-1">Payments</h1>
          <div className="flex mx-2">
            <button className="text-gray-300 ml-5 mr-1">
              <FontAwesomeIcon icon={faQuestionCircle} />
            </button>
            <h2 className="mx-2">How it works</h2>
          </div>
          <div className="mx-auto bg-zinc-100 p-2 m-1 rounded-lg flex ml-28">
            {/* Search bar */}
            <button className="text-gray-500 ml-2 text-sm">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
            <h1 className="ml-3 mr-20 text-gray-500">
              Search features, tutorials, etc.
            </h1>
          </div>
          <div className="ml-60 flex">
            <button className="bg-gray-300 mx-2 p-3 px-4 rounded-full ">
              <FontAwesomeIcon icon={faBullhorn} />
            </button>
            <button className="bg-gray-300 mx-2 px-5 rounded-full ">
              <FontAwesomeIcon icon={faSortDown} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
