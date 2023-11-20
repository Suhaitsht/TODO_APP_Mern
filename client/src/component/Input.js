// import { BiPlus } from "react-icons/bi";
import { useState } from "react";

export default function Input() {
  const [task, SetTask] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!task) return false;

    fetch("http://localhost:4000/task", {
      method: "POST",
      body: JSON.stringify({
        task,
      }),
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    })
      .then((res) => {
        alert("Task created");
        window.location = "http://localhost:3000/";
      })
      .catch((err) => {
        console.log(err);
      });

    SetTask("");
  }

  return (
    <form className="flex justify-center items-center" onSubmit={handleSubmit}>
      <input
        type="text"
        className="bg-slate-100 px-5 py-2 rounded-md"
        placeholder="Enter task"
        value={task}
        onChange={(e) => {
          SetTask(e.target.value);
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
