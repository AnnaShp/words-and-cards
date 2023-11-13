import s from "./MyTable.module.css";
import { useMemo, useEffect, useState } from "react";
import Data from "../Data/Data.json";
import MyRow from "./MyRow/MyRow";
import EmptyRow from "./EmptyRow/EmptyRow";

export default function MyTable() {
  const data = useMemo(() => Data, []);
  // const [data, setData] = useState(Data);

  // useEffect(() => {
  //   data ? setData(data) : <MyRow />;
  // }, []);

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
        {data.map((row) => {
          return (
            <MyRow
              key={row.id}
              id={row.id}
              eng={row.eng}
              transcription={row.transcription}
              rus={row.rus}
              topic={row.topic}
            />
          );
        })}
      </tbody>
    </table>
  );
}
