import s from "./Words.module.css";

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
  } = props;

  return (
    <div
      className={`${s.word_card} ${visible === id ? "active" : ""}`}
      onClick={() => showTranslate(id)}
    >
      <h2 className={s.word_eng}>{eng}</h2>
      <div className={s.word_transcription}>{transcription}</div>
      {emptyId === id ? <h3 className={s.word_rus}>{rus}</h3> : ""}
      <div className={s.word_topic}>Topic: {topic}</div>
    </div>
  );
}
