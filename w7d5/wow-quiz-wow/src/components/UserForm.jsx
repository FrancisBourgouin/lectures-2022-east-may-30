import useForm from "../hooks/useForm";

export default function UserForm(props) {
  const initialValues = {
    name: "",
    email: "",
    password: "",
    description: "",
  };

  const { handleChange, handleSubmit, formData } = useForm(initialValues, props.onSubmit);

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Enter your name"
        value={formData.name}
        onChange={handleChange}
      />
      <input
        type="text"
        name="email"
        placeholder="Enter your email"
        value={formData.email}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Enter your password"
        value={formData.password}
        onChange={handleChange}
      />
      <input
        type="text"
        name="description"
        placeholder="Enter your description"
        value={formData.description}
        onChange={handleChange}
      />
    </form>
  );
}
