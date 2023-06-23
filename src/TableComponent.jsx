import React from "react";
import { getPasswords } from "./db";

const TableComponent = () => {
  const passwords = getPasswords();

  return (
    <table className="min-w-full divide-y divide-indigo-200 mt-4 mx-auto border-2 border-indigo-700">
      <thead>
        <tr>
          <th className="px-6 py-3 bg-indigo-50 text-left text-sm text-indigo-500 uppercase w-10">
            ID
          </th>
          <th className="px-6 py-3 bg-indigo-50 text-left text-sm text-indigo-500 uppercase w-10">
            Website
          </th>
          <th className="px-6 py-3 bg-indigo-50 text-left text-sm text-indigo-500 uppercase w-10">
            Password
          </th>
        </tr>
      </thead>
      <tbody className="bg-slate-50 divide-y divide-slate-400">
        {
            passwords && passwords.map((eachPassword) => (
                <tr key={eachPassword.id}>
                    <td className="px-6 py-4 whitespace-nowrap">{eachPassword.id}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{eachPassword.website}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{eachPassword.password}</td>
                </tr>
            ))
        }
      </tbody>
    </table>
  );
};

export default TableComponent;
