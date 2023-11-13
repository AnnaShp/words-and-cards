import s from "./Home.module.css";
import MyTable from "../MyTable/MyTable";

export default function Home() {
  return (
    <div className={s.wrapper}>
      <LearnWithUs />
      <MyTable />
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
