import s from "./CardWords.module.css";

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
        <span className={s.word_desc}>Проверить перевод</span>
      )}
    </div>
  );
}
