// import React, { useEffect, useState } from "react";

import RecordData from "./RecordData";

export default function Body({ handleEdit, Task, Setdele }) {
  // Delete Todo
  function handleDelete(id) {
    fetch(`http://localhost:4000/deleteTask/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    })
      .then((result) => {
        Setdele(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <>
      <div className="bg-white mt-5 p-4 rounded-lg">
        <table className="w-[800px] ">
          <thead>
            <tr className="bg-yellow-600">
              <th className="text-center py-2">Tasks</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {Task.length === 0 ? (
              <tr className="text-center font-bold">
                <td className="text-lg font-bold flex justify-center">
                  NO Record
                </td>
              </tr>
            ) : (
              Task.map((todo) => (
                <tr className="text-center font-bold" key={todo._id}>
                  <RecordData
                    todo={todo}
                    handleDelete={handleDelete}
                    handleEdit={handleEdit}
                  />
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}
