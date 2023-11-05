import { useState } from "react";

export default function useCountLearned() {
  const [countLearned, setCountLearned] = useState(0);
  return [countLearned, setCountLearned];
}
