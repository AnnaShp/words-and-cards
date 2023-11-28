import s from "./MyRow.module.css";
import bucket from "../../Images/bucket.png";
import pen from "../../Images/pen.png";
import { useState, useRef } from "react";

export default function MyRow({
  // updateRow,
  // updateNewRow,
  id,
  english,
  russian,
  tags,
  transcription,
}) {
  const [isEditable, setEditable] = useState(false);
  const engRef = useRef();
  const rusRef = useRef();
  const tagsRef = useRef();
  const transcRef = useRef();

  const sendSaveData = () => {
    let row = {
      id: id,
      english: engRef.current.value,
      russian: rusRef.current.value,
      tags: tagsRef.current.value,
      transcription: transcRef.current.value,
    };
    // updateRow(row);
    setEditable(false);
    // updateNewRow(row);
  };

  if (isEditable)
    return (
      <tr>
        <td>{id}</td>
        <td>
          <input defaultValue={english} ref={engRef} />
        </td>
        <td>
          <input defaultValue={transcription} ref={transcRef} />
        </td>
        <td>
          <input defaultValue={russian} ref={rusRef} />
        </td>
        <td>
          <input defaultValue={tags} ref={tagsRef} />
        </td>
        <td className={s.td_change}>
          <button className={s.save} onClick={sendSaveData}>
            Сохранить
          </button>
        </td>
        <td className={s.td_delete}>
          <button
            className={s.delete}
            onClick={() => {
              // componentDeleteFromApi(id);
            }}
          >
            <img src={bucket} className="bucket" alt="bucket" />
          </button>
        </td>
      </tr>
    );

  return (
    <tr>
      <td>{id}</td>
      <td>{english}</td>
      <td>{transcription}</td>
      <td>{russian}</td>
      <td>{tags}</td>
      <td className={s.td_change}>
        <button
          className={s.change}
          onClick={() => {
            setEditable(true);
          }}
        >
          <img src={pen} className="pen" alt="pen" />
        </button>
      </td>
      <td className={s.td_delete}>
        <button className={s.delete}>
          <img src={bucket} className="bucket" alt="bucket" />
        </button>
      </td>
    </tr>
  );
}
