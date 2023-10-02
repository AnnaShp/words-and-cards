import "./Carousel.css";
import Data from "../Data/Data.json";
import CardWords from "../Words/Words";
import { useState } from "react";

export const Carousel = (props) => {
  const [emptyId, setTranslate] = useState(true);
  const [offset, setOffset] = useState(0);
  const page_widht = 300;
  // функция показа перевода слова
  const showTranslate = (id) => {
    setTranslate(id);
  };
  // функция листания назад
  const handlePrevBtn = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset + page_widht;
      return Math.min(newOffset, 0);
    });
  };
  // функция листания вперед
  const handleNextBtn = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset - page_widht;
      const maxOffset = -(page_widht * (Data.length - 1));
      return Math.max(newOffset, maxOffset);
    });
  };

  return (
    <div className="carousel" id="cards">
      <button className="btn_prev" onClick={handlePrevBtn}>
        Назад
      </button>
      <div className="card_container">
        <div
          className="card_visible"
          style={{ transform: `translateX(${offset}px)` }}
        >
          {Data.map((word) => (
            <CardWords
              key={word.id}
              id={word.id}
              eng={word.eng}
              transcription={word.transcription}
              rus={word.rus}
              topic={word.topic}
              emptyId={emptyId}
              setTranslate={setTranslate}
              showTranslate={showTranslate}
            />
          ))}
        </div>
      </div>
      <button className="btn_next" onClick={handleNextBtn}>
        Дальше
      </button>
    </div>
  );
};
