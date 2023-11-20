import s from "./MyTable.module.css";
import { useContext, useState } from "react";
import MyRow from "./MyRow/MyRow";
import EmptyRow from "./EmptyRow/EmptyRow";
import { WordContext } from "../Context/Context";

export default function MyTable() {
  const { words, isLoading, err } = useContext(WordContext);
  const [data, setData] = useState(words);

  const updateRow = (updatedRow) => {
    const newData = words.map((row) => {
      if (row.id === updatedRow.id) {
        return updatedRow;
      }
      console.log(updatedRow.id);
      return row;
    });
    console.log(newData);
    setData(newData);
  };

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
              eng={word.english}
              transcription={word.transcription}
              rus={word.russian}
              topic={word.tags}
              // componentChange={componentChange}
              updateRow={updateRow}
            />
          );
        })}
      </tbody>
    </table>
  );
}
