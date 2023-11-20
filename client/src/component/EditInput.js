import React, { useState } from "react";

export default function EditInput({ Single }) {
  const { _id, task } = Single;
  const [Utask, SetUtask] = useState(task);

  function handleUpdate(e) {
    e.preventDefault();
    if (Utask === "") return false;
    fetch(`http://localhost:4000/UpdateTask/${_id}`, {
      method: "PUT",
      body: JSON.stringify({
        Utask,
      }),
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    })
      .then((res) => {
        console.log(res);
        window.location = "//localhost:3000/";
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <form className="flex justify-center items-center" onSubmit={handleUpdate}>
      <input
        type="text"
        className="bg-slate-100 px-5 py-2 rounded-md"
        placeholder="Update Task task"
        value={Utask}
        onChange={(e) => {
          SetUtask(e.target.value);
        }}
      />
      <input
        type="submit"
        className="bg-orange-500 h-[40px] w-[70px] mx-[5px]  fs-bold rounded-md cursor-pointer text-zinc-950"
        value="Update"
      />
    </form>
  );
}
