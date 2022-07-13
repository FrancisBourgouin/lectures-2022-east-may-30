import { useState } from "react";

export default function Counter(props) {
  const [basicValue, setBasicValue] = useState(0);

  const [complexValue, setComplexValue] = useState({ count: 0 });

  const addOne = () => setBasicValue(basicValue + 1);

  const addTen = () => {
    setBasicValue(basicValue + 1);
    setBasicValue(basicValue + 1);
    setBasicValue(basicValue + 1);
    setBasicValue(basicValue + 1);
    setBasicValue(basicValue + 1);
    setBasicValue(basicValue + 1);
    setBasicValue(basicValue + 1);
    setBasicValue(basicValue + 1);
    setBasicValue(basicValue + 1);
    setBasicValue(basicValue + 1);
  };
  const complexAddOne = () => {
    complexValue.count += 1;
    setComplexValue({ ...complexValue });
  };

  const badComplexAddTen = () => {
    complexValue.count += 1;
    setComplexValue({ ...complexValue });
    complexValue.count += 1;
    setComplexValue({ ...complexValue });
    complexValue.count += 1;
    setComplexValue({ ...complexValue });
    complexValue.count += 1;
    setComplexValue({ ...complexValue });
    complexValue.count += 1;
    setComplexValue({ ...complexValue });
    complexValue.count += 1;
    setComplexValue({ ...complexValue });
    complexValue.count += 1;
    setComplexValue({ ...complexValue });
    complexValue.count += 1;
    setComplexValue({ ...complexValue });
    complexValue.count += 1;
    setComplexValue({ ...complexValue });
    complexValue.count += 1;
    setComplexValue({ ...complexValue });
  };
  const complexAddThree = () => {
    const newComplexValue = { ...complexValue, count: complexValue.count + 1 };
    setComplexValue(newComplexValue);
    const newComplexValue1 = { ...complexValue, count: complexValue.count + 1 };
    setComplexValue(newComplexValue1);
    const newComplexValue2 = { ...complexValue, count: complexValue.count + 1 };
    setComplexValue(newComplexValue2);
  };

  return (
    <div>
      <h1>Basic</h1>
      <p>{basicValue}</p>
      <button onClick={addTen}>Add 1</button>
      <h1>Complex</h1>
      <p>{complexValue.count}</p>
      <button onClick={complexAddThree}>Add 1</button>
    </div>
  );
}
