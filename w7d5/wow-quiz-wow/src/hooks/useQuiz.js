import { useState } from "react";
import useWow from "./useWow";
export default function useQuiz(listOfQuestions) {
  const [questions, setQuestions] = useState(listOfQuestions);
  const [currentScore, setCurrentScore] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  const { sayWow, fetchAWow } = useWow();

  const updateScoreAndIndex = (isGoodAnswer) => {
    if (isGoodAnswer) {
      setCurrentScore(currentScore + 1);
      sayWow();
      fetchAWow();
    }
    setCurrentIndex(currentIndex + 1);
  };

  const question = questions[currentIndex % questions.length];
  return { question, currentScore, currentIndex, updateScoreAndIndex };
}
