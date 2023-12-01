import s from "./Carousel.module.css";
import CardWords from "./CardWords/CardWords";
import { useState, useEffect, useContext } from "react";
import useCountLearned from "./useCountLearned";
import { observer, inject } from "mobx-react";

const Carousel = inject(["cardStore"])(
  observer(({ cardStore, err, isLoading }) => {
    const words = cardStore.words;
    // console.log(cardStore.words);

    // функция показа перевода слова
    const [emptyId, setTranslate] = useState(true);
    const showTranslate = (id) => {
      setTranslate(id);
    };

    // счетчик изученных слов
    const [count, setCount] = useCountLearned(0);
    const showCountLearned = () => {
      setCount((count) => count + 1);
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
    const maxOffset = -(page_widht * (words.length - 1));
    const handleNextBtn = () => {
      setOffset((currentOffset) => {
        const newOffset = currentOffset - page_widht;
        return Math.max(newOffset, maxOffset);
      });
    };

    let wordsArr;
    if (Array.isArray(words)) {
      wordsArr = words.map((word) => (
        <CardWords
          key={word.id}
          id={word.id}
          eng={word.english}
          transcription={word.transcription}
          rus={word.russian}
          topic={word.tags}
          emptyId={emptyId}
          setTranslate={setTranslate}
          showTranslate={showTranslate}
          showCountLearned={showCountLearned}
          useEffect={useEffect}
        />
      ));
    }

    if (err) {
      return <p className={s.err}>{err.message}</p>;
    }

    if (isLoading) {
      return (
        <div className={s.wrapperLoader}>
          <div className={s.loader} />
          <p className={s.loading}>Загрузка ...</p>
        </div>
      );
    }

    return (
      <div className={s.wrapper}>
        <div className={s.learned}>
          <span>Изучено слов: {count} </span>
        </div>
        <div className={s.carousel} id={s.cards}>
          <button className={s.btn_prev} onClick={handlePrevBtn}>
            Назад
          </button>
          <div className={s.card_container}>
            <div
              className={s.card_visible}
              style={{ transform: `translateX(${offset}px)` }}
            >
              {wordsArr}
            </div>
          </div>
          <button className={s.btn_next} onClick={handleNextBtn}>
            Дальше
          </button>
        </div>
        <div className={s.errFirst}>
          {
            <span style={{ display: offset >= 0 ? "flex" : "none" }}>
              Это самая первая карточка 🙂
            </span>
          }
        </div>
        <div className={s.errLast}>
          {
            <span style={{ display: offset === maxOffset ? "flex" : "none" }}>
              Карточки закончились, но можно начать сначала!
            </span>
          }
        </div>
      </div>
    );
  })
);

export default Carousel;
