import React, { useState, useMemo, useRef } from "react";
import s from "./ReactTable.module.css";
import { useTable } from "react-table";
import Data from "../Data/Data.json";
import { Columns } from "./Columns";
import ButtonChange from "../Buttons/Button_change";
import ButtonDelete from "../Buttons/Button_delete";

function BasicTable() {
  const [id, setId] = useState(Data.length + 1);
  // const addId = () => {
  //   setId(id + 1);
  // };
  const [eng, setEng] = useState("");
  // const addEng = (e) => {
  //   setEng(e.target.value);
  // };
  const [transcription, setTranscription] = useState("");
  // const addTranscription = (e) => {
  //   setTranscription(e.target.value);
  // };
  const [rus, setRus] = useState("");
  // const addRus = (e) => {
  //   setRus(e.target.value);
  // };
  const [topic, setTopic] = useState("");
  // const addTopic = (e) => {
  //   setTopic(e.target.value);
  //   console.log("value is:", e.target.value);
  // };

  const engValue = useRef(null);
  const transcValue = useRef(null);
  const rusValue = useRef(null);
  const topicValue = useRef(null);
  const handleChange = () => {
    setEng(engValue.current.value);
    setTranscription(transcValue.current.value);
    setRus(rusValue.current.value);
    setTopic(topicValue.current.value);
  };

  // переменные
  const inputId = <p value={id}>{id}</p>;
  const inputEng = (
    <input type="text" value={eng} onChange={handleChange} ref={engValue} />
  );
  const inputTransc = (
    <input
      type="text"
      value={transcription}
      onChange={handleChange}
      ref={transcValue}
    />
  );
  const inputRus = (
    <input type="text" value={rus} onChange={handleChange} ref={rusValue} />
  );
  const inputTopic = (
    <input type="text" value={topic} onChange={handleChange} ref={topicValue} />
  );

  let allfields = eng && transcription && rus && topic;

  // const [mess, setMess] = useState("");
  const clearInput = () => {
    setEng("");
    setTranscription("");
    setRus("");
    setTopic("");
  };

  let words = [];

  const sendData = (e) => {
    let newWord = { id, eng, transcription, rus, topic };

    if (
      engValue.current.value &&
      transcValue.current.valuen &&
      rusValue.current.value &&
      topicValue.current.value !== ""
    ) {
      let wordsStr = JSON.stringify(newWord);
      // console.log(wordsStr);
      // console.log(engValue.current.value);
      // console.log(transcValue.current.valuen);
      // console.log(rusValue.current.value);
      // console.log(topicValue.current.value);
      setId(id + 1);
      // функция записывает массив данных в LocalStorage
      window.localStorage.setItem("words", wordsStr);
      // console.log(wordsStr);
    }
    Data.push(newWord);
    // console.log(data);
    // console.log(Data);
    clearInput();
  };

  // wordsArr ? wordsArr : Data;

  const showFromLocal = () => {
    let wordsArr = JSON.parse(window.localStorage.getItem("words"));
    console.log(wordsArr);
    console.log(data);
  };

  const columns = useMemo(() => Columns, []);
  const data = useMemo(() => Data, []);

  const tableInstance = useTable({
    columns,
    data,
  });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  return (
    <table {...getTableProps()}>
      {/* название столбцов таблицы*/}
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render("Header")}</th>
            ))}
            <th></th>
            <th></th>
          </tr>
        ))}
      </thead>
      {/* тело таблицы */}
      <tbody {...getTableBodyProps()}>
        {/* строка с инпутами */}
        <tr className="tr_input">
          <td className="input_id">{inputId}</td>
          <td className="input_eng">{inputEng}</td>
          <td className="input_transcription">{inputTransc}</td>
          <td className="input_rus">{inputRus}</td>
          <td className="input_topic">{inputTopic}</td>
          <td className="td_save">
            <button
              className={s.save}
              onClick={() => {
                sendData();
                showFromLocal();
              }}
              disabled={!allfields}
            >
              Сохранить
            </button>
          </td>
          <td className={s.td_cancel}>
            <button className={s.cancel}>Отмена</button>
          </td>
          {/* строки с данными из массива */}
        </tr>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
              <td className={s.td_change}>
                <ButtonChange />
              </td>
              <td className={s.td_delete}>
                <ButtonDelete />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default BasicTable;
