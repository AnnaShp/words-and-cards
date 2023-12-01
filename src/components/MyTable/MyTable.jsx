import s from "./MyTable.module.css";
import { useState } from "react";
import MyRow from "./MyRow/MyRow";
import EmptyRow from "./EmptyRow/EmptyRow";
import { observer, inject } from "mobx-react";

const MyTable = inject(["cardStore"])(
  observer(({ cardStore, err, isLoading }) => {
    const wordsData = cardStore.words;

    const changeRow = (updatedRow) => {
      wordsData.map((row) => {
        if (row.id === updatedRow.id) {
          return updatedRow;
        }
        return row;
      });
    };

    let newDatas;
    if (Array.isArray(wordsData)) {
      newDatas = wordsData.map((word) => {
        return (
          <MyRow
            key={word.id}
            id={word.id}
            english={word.english}
            transcription={word.transcription}
            russian={word.russian}
            tags={word.tags}
            changeRow={changeRow}
          />
        );
      });
    } else {
      newDatas = (
        <tr>
          <td colSpan="?">Нет данных</td>
          <td colSpan="?">Нет данных</td>
          <td colSpan="?">Нет данных</td>
          <td colSpan="?">Нет данных</td>
          <td colSpan="?">Нет данных</td>
        </tr>
      );
    }
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
          {newDatas}
        </tbody>
      </table>
    );
  })
);

export default MyTable;
