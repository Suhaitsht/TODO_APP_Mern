import { useState, useEffect } from "react";
import Body from "./component/Body";
import Input from "./component/Input";
import EditInput from "./component/EditInput";
import { FaThinkPeaks } from "react-icons/fa";

function App() {
  const [Single, SetUpdate] = useState([]);

  async function handleEdit(id) {
    // alert(id);
    await fetch(`http://localhost:4000/getSingleTask/${id}`)
      .then((result) => {
        result.json().then((data) => {
          SetUpdate(data);
        });
      })

      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <>
      <div className="w-full mx-3 ">
        <div className="text-center mb-3 uppercase font-bold text-[50px]">
          <h1>to do list</h1>
        </div>
      </div>
      {Single.length === 0 ? <Input /> : <EditInput Single={Single} />}
      <Body handleEdit={handleEdit} />
    </>
  );
}

export default App;
