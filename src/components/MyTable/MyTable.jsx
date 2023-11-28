import s from "./MyTable.module.css";
import { useState } from "react";
import MyRow from "./MyRow/MyRow";
import EmptyRow from "./EmptyRow/EmptyRow";
// import { observer, inject } from "mobx-react";

const MyTable = ({ cardStore }) => {
  const words = [];
  const [newRow, setNewRow] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState("");

  const addNewRow = () => {
    // if (!newRow) return;
    newRow && words.addWord();
    setNewRow("");
  };

  const deleteNewRow = (key) => {
    cardStore.removeWord(key);
  };

  // const updateNewRow = (newRow) => {
  //   cardStore.updateWord(newRow);
  //   setNewRow();
  // };

  // const updateRow = (updatedRow) => {
  //   const newData = words.map((row) => {
  //     if (row.id === updatedRow.id) {
  //       return updatedRow;
  //     }
  //     return row;
  //   });
  //   setData(newData);
  // };

  if (err) {
    return <p className={s.err}>Упс, ошибка: {err.message}</p>;
  }
  if (isLoading) {
    return (
      <div className={s.wrapperLoader}>
        <div className={s.loader} />
        <p className={s.loading}>Загрузка ...</p>
        <p className={s.loading}>{err}</p>
      </div>
    );
  }
  return (
    <table id="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Слово</th>
          <th>Транскрипция</th>
          <th>Перевод</th>
          <th>Тема</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <EmptyRow />
        {words.map((word) => {
          return (
            <MyRow
              key={word.id}
              id={word.id}
              english={word.english}
              transcription={word.transcription}
              russian={word.russian}
              tags={word.tags}
              // updateNewRow={updateNewRow}
            />
          );
        })}
      </tbody>
    </table>
  );
};

export default MyTable;
