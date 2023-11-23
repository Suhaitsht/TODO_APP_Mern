import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { TfiWrite } from "react-icons/tfi";

// create a new component for render the created task

export default function RecordData({ todo, handleDelete, handleEdit }) {
  return (
    <>
      <td className="text-xl">{todo.task}</td>
      <td className="flex items-center justify-center gap-5 my-4">
        <FaRegTrashAlt
          className="cursor-pointer"
          onClick={() => {
            handleDelete(todo._id);
          }}
        />
        <TfiWrite
          className="cursor-pointer"
          onClick={() => {
            handleEdit(todo._id);
          }}
        />
      </td>
    </>
  );
}
