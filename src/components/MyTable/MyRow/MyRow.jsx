import s from "./MyRow.module.css";
import ButtonDelete from "../../Buttons/Button_delete";
import pen from "../../Images/pen.png";
import { useState, useRef } from "react";

export default function MyRow(props) {
  const [isEditable, setEditable] = useState(false);
  const [rowData, setrowData] = useState(props);

  const engRef = useRef();
  const rusRef = useRef();
  const topicRef = useRef();
  const transcRef = useRef();

  const sendSaveData = () => {
    setrowData({
      ...rowData,
      eng: engRef.current.value,
      rus: rusRef.current.value,
      topic: topicRef.current.value,
      transcription: transcRef.current.value,
    });
    // не изменяет первоначальные данные в Data
    // let newWord = {
    //   eng: engRef.current.value,
    //   rus: rusRef.current.value,
    //   topic: topicRef.current.value,
    //   transcription: transcRef.current.value,
    // };
    // let wordsStr = JSON.stringify(newWord);
    // window.localStorage.setItem("words", wordsStr);
  };

  if (isEditable)
    return (
      <tr>
        <td>{rowData.id}</td>
        <td>
          <input defaultValue={rowData.eng} ref={engRef} />
        </td>
        <td>
          <input defaultValue={rowData.transcription} ref={transcRef} />
        </td>
        <td>
          <input defaultValue={rowData.rus} ref={rusRef} />
        </td>
        <td>
          <input defaultValue={rowData.topic} ref={topicRef} />
        </td>
        <td className={s.td_change}>
          <button className={s.save} onClick={sendSaveData}>
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
      <td>{props.id}</td>
      <td>{rowData.eng}</td>
      <td>{rowData.transcription}</td>
      <td>{rowData.rus}</td>
      <td>{rowData.topic}</td>
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
