import useForm from "../hooks/useForm";

export default function CityForm(props) {
  const initialValues = { city: "" };
  const { formData, handleChange, handleSubmit } = useForm(initialValues, props.onSubmit);
  return (
    <form className="CityForm" onSubmit={handleSubmit}>
      <input type="text" name="city" value={formData.city} onChange={handleChange} />
      <button>Fetch weather</button>
    </form>
  );
}
