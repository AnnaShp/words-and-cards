import pen from "../Images/pen.png";
import "./Button.css";

export default function ButtonChange() {
  return (
    <button className="change">
      <img src={pen} className="pen" />
    </button>
  );
}
