export default function NewQuestionForm(props) {
  const initialValues = { question: "", answer: "" };

  const { formData, handleChange, handleSubmit } = useForm(initialValues);
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="question"
        placeholder="Enter your question"
        value={formData.question}
        onChange={handleChange}
      />
      <input
        type="text"
        name="answer"
        placeholder="Enter your answer"
        value={formData.answer}
        onChange={handleChange}
      />
    </form>
  );
}
