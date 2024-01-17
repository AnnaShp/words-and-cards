import s from "./EmptyRow.module.css";
import { useState, useRef, useEffect } from "react";
import { observer, inject } from "mobx-react";

const EmptyRow = inject(["cardStore"])(
  observer(({ cardStore, err, changeRow }) => {
    const [loading, setLoading] = useState(true);
    const [id, setId] = useState(cardStore.words.length + 1);
    const [english, setEng] = useState("");
    const [transcription, setTranscription] = useState("");
    const [russian, setRus] = useState("");
    const [tags, setTags] = useState("");

    useEffect(() => {
      cardStore.fetchData(() => {
        setLoading(false);
      });
      // cardStore.addWord(() => {
      //   setLoading(false);
      // });
    });

    let allfields = english && transcription && russian && tags;

    const engValue = useRef(null);
    const transcValue = useRef(null);
    const rusValue = useRef(null);
    const tagsValue = useRef(null);

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

    const sendData = async (newRow) => {
      setLoading(true);
      setId(id + 1);
      newRow = { id, english, transcription, russian, tags };

      await cardStore.addWord(newRow);
      changeRow(newRow);
      clearInput();
      setLoading(false);
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
          <input
            type="text"
            value={english}
            onChange={handleChange}
            ref={engValue}
            style={{
              border: english !== "" ? "1px solid green" : "1px solid red",
            }}
          />
        </td>
        <td>
          <input
            type="text"
            value={transcription}
            onChange={handleChange}
            ref={transcValue}
            style={{
              border:
                transcription !== "" ? "1px solid green" : "1px solid red",
            }}
          />
        </td>
        <td>
          <input
            type="text"
            value={russian}
            onChange={handleChange}
            ref={rusValue}
            style={{
              border: russian !== "" ? "1px solid green" : "1px solid red",
            }}
          />
        </td>
        <td>
          <input
            type="text"
            value={tags}
            onChange={handleChange}
            ref={tagsValue}
            style={{
              border: tags !== "" ? "1px solid green" : "1px solid red",
            }}
          />
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
          <button
            className={s.cancel}
            onClick={() => {
              clearInput();
            }}
          >
            Отмена
          </button>
        </td>
      </tr>
    );
  })
);

export default EmptyRow;
