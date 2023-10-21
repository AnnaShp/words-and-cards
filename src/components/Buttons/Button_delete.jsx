import { useState } from "react";
import bucket from "../Images/bucket.png";
import "./Button.css";

export default function ButtonDelete() {
  // const [remove, setRemove] = useState(false);
  // const deleteRow = () => {
  //   setRemove;
  // };

  return (
    <button className="delete">
      <img src={bucket} className="bucket" />
    </button>
  );
}
