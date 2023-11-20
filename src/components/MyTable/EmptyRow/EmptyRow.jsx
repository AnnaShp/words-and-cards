import s from "./EmptyRow.module.css";
import { useState, useRef, useContext } from "react";
import { WordContext } from "../../Context/Context";

export default function EmptyRow() {
  const { words, componentAddToApi, err } = useContext(WordContext);
  const [id, setId] = useState(words.length + 1);
  const [english, setEng] = useState("");
  const [transcription, setTranscription] = useState("");
  const [russian, setRus] = useState("");
  const [tags, setTags] = useState("");

  let allfields = english && transcription && russian && tags;

  const engValue = useRef(null);
  const transcValue = useRef(null);
  const rusValue = useRef(null);
  const tagsValue = useRef(null);
  let allRefFields = engValue && transcValue && rusValue && tagsValue;

  const handleChange = () => {
    setEng(engValue.current.value);
    setTranscription(transcValue.current.value);
    setRus(rusValue.current.value);
    setTags(tagsValue.current.value);
  };

  const clearInput = () => {
    setEng("");
    setTranscription("");
    setRus("");
    setTags("");
  };

  const sendData = () => {
    let row = { id, english, transcription, russian, tags };
    if (allRefFields.current.value !== "") {
      setId(id + 1);
      componentAddToApi(row);
    }
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
        {english === "" ? (
          <input
            type="text"
            value={english}
            onChange={handleChange}
            ref={engValue}
            style={{ border: "1px solid red" }}
          />
        ) : (
          <input
            type="text"
            value={english}
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
        {russian === "" ? (
          <input
            type="text"
            value={russian}
            onChange={handleChange}
            ref={rusValue}
            style={{ border: "1px solid red" }}
          />
        ) : (
          <input
            type="text"
            value={russian}
            onChange={handleChange}
            ref={rusValue}
            style={{ border: "1px solid green" }}
          />
        )}
      </td>
      <td>
        {tags === "" ? (
          <input
            type="text"
            value={tags}
            onChange={handleChange}
            ref={tagsValue}
            style={{ border: "1px solid red" }}
          />
        ) : (
          <input
            type="text"
            value={tags}
            onChange={handleChange}
            ref={tagsValue}
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
