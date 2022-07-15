import { useState } from "react";

export default function QuestionForm(props) {
  const { question, answer } = props;
  const [userAnswer, setUserAnswer] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    setUserAnswer("");
    props.onSubmit(userAnswer === answer);
  };

  const handleChange = (event) => {
    setUserAnswer(event.target.value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <p>{question}</p>
      <input
        type="text"
        placeholder="ANSWER"
        onChange={handleChange}
        value={userAnswer}
      />
      <button>Submit!</button>
    </form>
  );
}
