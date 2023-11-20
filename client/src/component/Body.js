import React, { useEffect, useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { TfiWrite } from "react-icons/tfi";

export default function Body({ handleEdit }) {
  const [Task, setTask] = useState([]);

  // Fetch from database
  useEffect(() => {
    fetch("http://localhost:4000/getTask").then((res) => {
      res.json().then((result) => {
        setTask(result);
      });
    });
  }, []);

  // Delete Todo
  function handeleDelete(id) {
    fetch(`http://localhost:4000/deleteTask/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    })
      .then((result) => {
        window.location = "http://localhost:3000/";
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // update function

  return (
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
            <h2>NO Record</h2>
          ) : (
            Task.map((todo) => (
              <tr className="text-center font-bold">
                <td className="text-xl">{todo.task} </td>
                <td className="flex items-center justify-center gap-5 my-4">
                  <FaRegTrashAlt
                    id={todo._id}
                    className="cursor-pointer"
                    onClick={() => {
                      handeleDelete(todo._id);
                    }}
                  />
                  <TfiWrite
                    className="cursor-pointer"
                    onClick={() => {
                      handleEdit(todo._id);
                    }}
                  />
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
