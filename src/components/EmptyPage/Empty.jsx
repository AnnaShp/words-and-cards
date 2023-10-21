import s from "./Empty.module.css";
import Travolta from "../Images/travolta_404.gif";
import { Link } from "react-router-dom";

export default function EmptyPage() {
  return (
    <div className={s.center}>
      <div className={s.error}>
        <img src={Travolta}></img>
        <p className={s.p_404}>Error 404</p>
        <p className={s.p_error}>Страница не найдена</p>
      </div>
      <div className={s.return}>
        <Link to="/">Вернуться на главную страницу</Link>
      </div>
    </div>
  );
}
