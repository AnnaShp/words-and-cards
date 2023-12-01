import s from "./Home.module.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className={s.wrapper}>
      <LearnWithUs />
      <LinkToTable />
    </div>
  );
}

const LearnWithUs = () => {
  return (
    <div className={s.main_part}>
      <h1>Учи язык вместе с нами</h1>
    </div>
  );
};

const LinkToTable = () => {
  return (
    <div className={s.tablePart}>
      <Link to="/table">Перейти к таблице</Link>
    </div>
  );
};
