import React from "react";
import { FiRefreshCw } from "react-icons/fi";

const MainPage = () => {
  return (
    <div>
      <div>
        <h1 className="text-4xl text-center font-medium">Password Generator</h1>
        <button className=" bg-indigo-700 text-indigo-100 px-4 py-4 rounded-lg hover:bg-indigo-500 shadow-lg inline-flex ">
          Generate Password
          <span className="ml-4">
            <FiRefreshCw size={28} />
          </span>
        </button>
      </div>
      <div>
        <input
          className=" w-3/4 border-indigo-700 text-indigo-500 px-4 py-4 rounded-md border-2 mt-4 text-lg"
          readOnly
          placeholder="Password:"
        />
      </div>
    </div>
  );
};

export default MainPage;
