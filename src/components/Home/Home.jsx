import s from "./Home.module.css";
import BasicTable from "../ReactTable/ReactTable";

export default function Home() {
  return (
    <div className={s.wrapper}>
      <LearnWithUs />
      <BasicTable />
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
