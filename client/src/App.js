import { useState, useEffect } from "react";
import Body from "./component/Body";
import Input from "./component/Input";
import EditInput from "./component/EditInput";
import { FaThinkPeaks } from "react-icons/fa";

function App() {
  const [Single, SetUpdate] = useState([]);
  const [res, SetRes] = useState(null);
  const [dele, Setdele] = useState(null);
  const [update, SetUpdatestatus] = useState(null);
  const [Task, setTask] = useState([]);
  const [task, SetNewtask] = useState("");

  async function handleEdit(id) {
    // alert(id);
    await fetch(`http://localhost:4000/getSingleTask/${id}`)
      .then((result) => {
        result.json().then((data) => {
          SetUpdate(data);
          console.log(data);
        });
      })

      .catch((err) => {
        console.log(err);
      });
    SetUpdate([]);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const Reg = /^[a-z\-]+$/;

    function validateInput(task) {
      if (Reg.test(task)) {
        return true;
      } else {
        return false;
      }
    }
    if (validateInput(task)) {
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
          SetRes(res);
        })
        .catch((err) => {
          console.log(err);
        });

      SetNewtask("");
    } else {
      alert("This field is required and space not allowed");
    }
  }

  // Fetch from database
  useEffect(() => {
    fetch("http://localhost:4000/getTask").then((res) => {
      res.json().then((result) => {
        setTask(result);
      });
    });
    SetUpdate([]);
  }, [res, dele, update]);

  return (
    <>
      <div className="w-full mx-3 ">
        <div className="text-center mb-3 uppercase font-bold text-[50px]">
          <h1>to do list</h1>
        </div>
      </div>
      {Single.length === 0 ? (
        <Input
          handleSubmit={handleSubmit}
          task={task}
          SetNewtask={SetNewtask}
        />
      ) : (
        <EditInput
          SetUpdate={SetUpdate}
          Single={Single}
          SetUpdatestatus={SetUpdatestatus}
        />
      )}
      <Body handleEdit={handleEdit} Task={Task} Setdele={Setdele} />
    </>
  );
}

export default App;
