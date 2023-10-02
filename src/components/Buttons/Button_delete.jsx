import bucket from "../Images/bucket.png";

export default function ButtonDelete() {
  return (
    <button className="delete">
      <img src={bucket} className="bucket" />
    </button>
  );
}
