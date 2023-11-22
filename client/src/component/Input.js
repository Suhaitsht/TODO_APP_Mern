// import { BiPlus } from "react-icons/bi";
import { useState } from "react";

export default function Input({ handleSubmit, task, SetNewtask }) {
  return (
    <form className="flex justify-center items-center" onSubmit={handleSubmit}>
      <input
        type="text"
        className="bg-slate-100 px-5 py-2 rounded-md"
        placeholder="Enter task"
        value={task}
        onChange={(e) => {
          SetNewtask(e.target.value);
        }}
      />
      <input
        type="submit"
        className="bg-orange-500 h-[40px] w-[40px] mx-[5px] rounded-md cursor-pointer text-zinc-950"
        value="+"
      />
    </form>
  );
}
