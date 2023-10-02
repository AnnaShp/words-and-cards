import "./Words.css";

export default function CardWords(props) {
  const { id, emptyId, showTranslate, visible } = props;
  return (
    <div
      className={`word-card ${visible === id ? "active" : ""}`}
      onClick={() => showTranslate(id)}
    >
      <h2 className="word-eng">{props.eng}</h2>
      <div className="word-transcription">{props.transcription}</div>
      {emptyId === id ? <h3 className="word-rus">{props.rus}</h3> : ""}
      <div className="word-topic">Topic: {props.topic}</div>
    </div>
  );
}
