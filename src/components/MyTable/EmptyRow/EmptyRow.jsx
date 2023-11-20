import s from "./EmptyRow.module.css";
import { useState, useRef, useContext } from "react";
// import Data from "../../Data/Data.json";
import { WordContext } from "../../Context/Context";

export default function EmptyRow() {
  const { words, componentAdd, err } = useContext(WordContext);
  const [id, setId] = useState(words.length + 1);
  const [eng, setEng] = useState("");
  const [transcription, setTranscription] = useState("");
  const [rus, setRus] = useState("");
  const [topic, setTopic] = useState("");

  let allfields = eng && transcription && rus && topic;

  const engValue = useRef(null);
  const transcValue = useRef(null);
  const rusValue = useRef(null);
  const topicValue = useRef(null);
  let allRefFields = engValue && transcValue && rusValue && topicValue;

  const handleChange = () => {
    setEng(engValue.current.value);
    setTranscription(transcValue.current.value);
    setRus(rusValue.current.value);
    setTopic(topicValue.current.value);
  };

  const clearInput = () => {
    setEng("");
    setTranscription("");
    setRus("");
    setTopic("");
  };

  const sendData = () => {
    let row = { id, eng, transcription, rus, topic };
    if (allRefFields.current.value !== "") {
      // let wordsStr = JSON.stringify(newWord);
      setId(id + 1);
      componentAdd(row);
      // window.localStorage.setItem("words", wordsStr);
    }
    // Data.push(newWord);
    return row;
    clearInput();
  };

  if (err) {
    return <p className={s.err}>Упс, ошибка: {err.message}</p>;
  }
  return (
    <tr>
      <td>
        <p>{id}</p>
      </td>
      <td>
        {eng === "" ? (
          <input
            type="text"
            value={eng}
            onChange={handleChange}
            ref={engValue}
            style={{ border: "1px solid red" }}
          />
        ) : (
          <input
            type="text"
            value={eng}
            onChange={handleChange}
            ref={engValue}
            style={{ border: "1px solid green" }}
          />
        )}
      </td>
      <td>
        {transcription === "" ? (
          <input
            type="text"
            value={transcription}
            onChange={handleChange}
            ref={transcValue}
            style={{ border: "1px solid red" }}
          />
        ) : (
          <input
            type="text"
            value={transcription}
            onChange={handleChange}
            ref={transcValue}
            style={{ border: "1px solid green" }}
          />
        )}
      </td>
      <td>
        {rus === "" ? (
          <input
            type="text"
            value={rus}
            onChange={handleChange}
            ref={rusValue}
            style={{ border: "1px solid red" }}
          />
        ) : (
          <input
            type="text"
            value={rus}
            onChange={handleChange}
            ref={rusValue}
            style={{ border: "1px solid green" }}
          />
        )}
      </td>
      <td>
        {topic === "" ? (
          <input
            type="text"
            value={topic}
            onChange={handleChange}
            ref={topicValue}
            style={{ border: "1px solid red" }}
          />
        ) : (
          <input
            type="text"
            value={topic}
            onChange={handleChange}
            ref={topicValue}
            style={{ border: "1px solid green" }}
          />
        )}
      </td>
      <td>
        <button
          className={s.save}
          onClick={() => {
            sendData();
          }}
          disabled={!allfields}
        >
          Сохранить
        </button>
      </td>
      <td>
        <button className={s.cancel}>Отмена</button>
      </td>
    </tr>
  );
}
