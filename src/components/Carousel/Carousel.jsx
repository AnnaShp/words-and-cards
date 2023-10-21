import s from "./Carousel.module.css";
import Data from "../Data/Data.json";
import CardWords from "./Words/Words";
import { useState } from "react";

export const Carousel = (props) => {
  // функция показа перевода слова
  const [emptyId, setTranslate] = useState(true);
  const showTranslate = (id) => {
    setTranslate(id);
  };
  // переменные для карусели
  const [offset, setOffset] = useState(0);
  const page_widht = 300;
  //листание назад
  const handlePrevBtn = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset + page_widht;
      return Math.min(newOffset, 0);
    });
  };

  // листание вперед
  const maxOffset = -(page_widht * (Data.length - 1));
  const handleNextBtn = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset - page_widht;
      return Math.max(newOffset, maxOffset);
    });
  };

  return (
    <div className={s.wrapper}>
      <div className={s.carousel} id={s.cards}>
        <button className={s.btn_prev} onClick={handlePrevBtn}>
          Назад
        </button>
        <div className={s.card_container}>
          <div
            className={s.card_visible}
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
        <button className={s.btn_next} onClick={handleNextBtn}>
          Дальше
        </button>
      </div>
      <div className={s.error}>
        {
          <span style={{ display: offset === maxOffset ? "flex" : "none" }}>
            Карточки закончились, но можно начать сначала!
          </span>
        }
      </div>
    </div>
  );
};
