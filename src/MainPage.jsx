import React, { useState } from "react";
import { FiRefreshCw } from "react-icons/fi";
import { AiOutlineCopy , AiOutlineSave} from "react-icons/ai";
import toast, { Toaster } from 'react-hot-toast';

const MainPage = () => {
  const [password, setPassword] = useState("");
  const [website, setWebsite] = useState("");

  const generatePassword = () => {
    const randomPassword = Math.random().toString(36).slice(-10);
    setPassword(randomPassword);
  };

  const copyPassword = () => {
    if (password){
      navigator.clipboard.writeText(password);
      toast("Password copied!");
    }
  }

  return (
    <div>
      <Toaster
        toastOptions={{
          duration: 1000,

        }}
      />
      <div>
        <h1 className="text-4xl text-center font-medium">Password Generator</h1>
        <button
          onClick={generatePassword}
          className=" mt-8 bg-indigo-700 text-indigo-100 px-4 py-4 rounded-lg hover:bg-indigo-500 shadow-lg inline-flex "
        >
          Generate Password
          <span className="ml-4">
            <FiRefreshCw size={28} />
          </span>
        </button>
      </div>
      <div>
        <input
          value={password}
          className=" w-3/4 border-indigo-700 text-indigo-500 px-4 py-4 rounded-md border-2 mt-4 text-lg"
          readOnly
          placeholder="Password:"
        />
        <button onClick = { copyPassword } className=" ml-4 " title="copy-button">
          <AiOutlineCopy size={32} className="text-indigo-700 mt-4" />
        </button>
      </div>
      <div>
        <input
          value={website}
          className=" w-3/4 border-indigo-700 text-indigo-500 px-4 py-4 rounded-md border-2 mt-4 text-lg"
          placeholder="Add Website URL:"
          onChange={(event) => setWebsite(event.target.value)}
        />
        <button className=" ml-4 " title="save-button">
          <AiOutlineSave size={32} className="text-indigo-700 mt-4" />
        </button>
      </div>
    </div>
  );
};

export default MainPage;
