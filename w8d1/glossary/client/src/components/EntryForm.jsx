import { useState } from "react";

export default function EntryForm(props) {
  const initialValues = { subject: "", content: "" };
  const [formData, setFormData] = useState(initialValues);
  const { subject, content } = formData;

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    props.onSubmit(formData);

    setFormData(initialValues);
  };

  return (
    <section>
      <h1>Add a new entry</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="subject"
          placeholder="subject"
          onChange={handleChange}
          value={subject}
        />
        <input
          type="text"
          name="content"
          placeholder="content"
          onChange={handleChange}
          value={content}
        />
        {!props.isLoading && <button>Add entry</button>}
        {props.isLoading && <button disabled>LOADING</button>}
      </form>
    </section>
  );
}
