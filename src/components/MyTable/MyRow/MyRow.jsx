import s from "./MyRow.module.css";
import ButtonDelete from "../../Buttons/Button_delete";
import pen from "../../Images/pen.png";
import { useState, useRef } from "react";

export default function MyRow({
  updateRow,
  // componentChange,
  id,
  eng,
  rus,
  topic,
  transcription,
}) {
  const [isEditable, setEditable] = useState(false);
  const engRef = useRef();
  const rusRef = useRef();
  const topicRef = useRef();
  const transcRef = useRef();

  const sendSaveData = () => {
    updateRow({
      id: id,
      eng: engRef.current.value,
      rus: rusRef.current.value,
      topic: topicRef.current.value,
      transcription: transcRef.current.value,
    });
    // console.log(engRef.current.value);
    // console.log(rusRef.current.value);
    // console.log(topicRef.current.value);
    // console.log(transcRef.current.value);

    // не изменяет первоначальные данные в Data
    // let newWord = {
    //   eng: engRef.current.value,
    //   rus: rusRef.current.value,
    //   topic: topicRef.current.value,
    //   transcription: transcRef.current.value,
    // };
    // let wordsStr = JSON.stringify(newWord);
    // console.log(wordsStr);
    // window.localStorage.setItem("words", wordsStr);
    setEditable(false);
  };

  if (isEditable)
    return (
      <tr>
        <td>{id}</td>
        <td>
          <input defaultValue={eng} ref={engRef} />
        </td>
        <td>
          <input defaultValue={transcription} ref={transcRef} />
        </td>
        <td>
          <input defaultValue={rus} ref={rusRef} />
        </td>
        <td>
          <input defaultValue={topic} ref={topicRef} />
        </td>
        <td className={s.td_change}>
          <button
            className={s.save}
            onClick={() => {
              sendSaveData();
              // componentChange(id);
            }}
          >
            Сохранить
          </button>
        </td>
        <td className={s.td_delete}>
          <ButtonDelete />
        </td>
      </tr>
    );

  return (
    <tr>
      <td>{id}</td>
      <td>{eng}</td>
      <td>{transcription}</td>
      <td>{rus}</td>
      <td>{topic}</td>
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
        <ButtonDelete />
      </td>
    </tr>
  );
}
