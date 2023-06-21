import React from "react";
import { FiRefreshCw } from "react-icons/fi";

const MainPage = () => {
  return (
    <div>
      <h1 className="text-4xl text-center font-medium">Password Generator</h1>
      <button className=" bg-indigo-700 text-indigo-100 px-4 py-4 rounded-lg hover:bg-indigo-500 shadow-lg inline-flex ">
        Generate Password
        <span className="ml-4">
          <FiRefreshCw size={28} />
        </span>
      </button>
    </div>
  );
};

export default MainPage;
