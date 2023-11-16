import s from "./MyRow.module.css";
import ButtonDelete from "../../Buttons/Button_delete";
import pen from "../../Images/pen.png";
import { useState, useRef, useContext } from "react";
import { WordContext } from "../../Context/Context";

export default function MyRow(props) {
  const [isEditable, setEditable] = useState(false);
  const { words, componentChange } = useContext(WordContext);
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

    // setrowData({
    //   ...words,
    //   eng: engRef.current.value,
    //   rus: rusRef.current.value,
    //   topic: topicRef.current.value,
    //   transcription: transcRef.current.value,
    // });
    console.log(engRef.current.value);
    console.log(rusRef.current.value);
    console.log(topicRef.current.value);
    console.log(transcRef.current.value);

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
  };

  if (isEditable)
    return (
      <tr>
        <td>{rowData.id}</td>
        <td>
          <input defaultValue={props.eng} ref={engRef} />
        </td>
        <td>
          <input defaultValue={props.transcription} ref={transcRef} />
        </td>
        <td>
          <input defaultValue={props.rus} ref={rusRef} />
        </td>
        <td>
          <input defaultValue={props.topic} ref={topicRef} />
        </td>
        <td className={s.td_change}>
          <button
            className={s.save}
            onClick={() => {
              // sendSaveData();
              componentChange();
              setrowData({
                ...rowData,
                eng: engRef.current.value,
                rus: rusRef.current.value,
                topic: topicRef.current.value,
                transcription: transcRef.current.value,
              });
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
      <td>{props.id}</td>
      <td>{props.eng}</td>
      <td>{props.transcription}</td>
      <td>{props.rus}</td>
      <td>{props.topic}</td>
      {/* <td>{rowData.eng}</td>
      <td>{rowData.transcription}</td>
      <td>{rowData.rus}</td>
      <td>{rowData.topic}</td> */}
      <td className={s.td_change}>
        <button
          className={s.change}
          onClick={() => {
            setEditable(true);
            // sendSaveData();
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
