import s from "./CardWords.module.css";
import { useState } from "react";

export default function CardWords(props) {
  const {
    eng,
    transcription,
    rus,
    topic,
    id,
    emptyId,
    showTranslate,
    visible,
    showCountLearned,
  } = props;

  const [focus, setFocus] = useState(true);

  return (
    <div
      className={`${s.word_card} ${visible === id ? "active" : ""}`}
      onClick={() => {
        showTranslate(id);
        showCountLearned(id);
      }}
    >
      <h2 className={s.word_eng}>{eng}</h2>
      <div className={s.word_transcription}>{transcription}</div>
      <div className={s.word_topic}>Topic: {topic}</div>
      {emptyId === id ? (
        <h3 className={s.word_rus}>{rus}</h3>
      ) : (
        <span
          style={{
            background: focus ? "rgb(194, 189, 189)" : "transparent",
          }}
          className={s.word_desc}
          onFocus={() => setFocus(false)}
        >
          Проверить перевод
        </span>
      )}
    </div>
  );
}
