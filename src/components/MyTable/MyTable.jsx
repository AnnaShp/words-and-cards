import s from "./MyTable.module.css";
import { useContext } from "react";
import MyRow from "./MyRow/MyRow";
import EmptyRow from "./EmptyRow/EmptyRow";
import { WordContext } from "../Context/Context";

export default function MyTable() {
  // useEffect(() => {
  //   data ? setData(data) : <MyRow />;
  // }, []);

  const { words, isLoading, err } = useContext(WordContext);

  if (err) {
    return <p className={s.err}>{err.message}</p>;
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
            />
          );
        })}
      </tbody>
    </table>
  );
}
