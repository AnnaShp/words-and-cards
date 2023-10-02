import "./ReactTable.css";
import React, { useMemo } from "react";
import { useTable } from "react-table";
import Data from "../Data/Data.json";
import { Columns } from "./Columns";
import ButtonChange from "../Buttons/Button_change";
import ButtonDelete from "../Buttons/Button_delete";
import { useState } from "react";

function BasicTable() {
  const [id, setId] = useState(Data.length + 1);
  const addId = () => {
    setId(id + 1);
  };
  const [eng, setEng] = useState("");
  const addEng = (e) => {
    setEng(e.target.value);
    // console.log(e.target.value);
  };
  const [transcription, setTranscription] = useState("");
  const addTranscription = (e) => {
    setTranscription(e.target.value);
    // console.log(e.target.value);
  };
  const [rus, setRus] = useState("");
  const addRus = (e) => {
    setRus(e.target.value);
    // console.log(e.target.value);
  };
  const [topic, setTopic] = useState("");
  const addTopic = (e) => {
    setTopic(e.target.value);
    // console.log(e.target.value);
  };

  const inputId = <p value={id}>{id}</p>;
  const inputEng = <input type="text" value={eng} onChange={addEng}></input>;
  const inputTransc = (
    <input type="text" value={transcription} onChange={addTranscription} />
  );
  const inputRus = <input type="text" value={rus} onChange={addRus}></input>;
  const inputTopic = (
    <input type="text" value={topic} onChange={addTopic}></input>
  );

  const [mess, setMess] = useState("");
  const clearInput = () => {
    setEng("");
    setTranscription("");
    setRus("");
    setTopic("");
  };

  const sendData = () => {
    let data = { id, eng, transcription, rus, topic };
    addId();

    Data.push(data);
    console.log(data);
    console.log(Data);
    clearInput();
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
    <table {...getTableProps()} id="table">
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
            <button className="save" onClick={sendData}>
              Сохранить
            </button>
          </td>
          <td className="td_cancel">
            <button className="cancel">Отмена</button>
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
              <td className="td_change">
                <ButtonChange />
              </td>
              <td className="td_delete">
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