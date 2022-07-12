import { useState } from "react";

let name = "Jesse";

export default function SomeComponent(props) {
  const [value, setValue] = useState("Jesse");
  // ....
  let bob = "Bob";
  bob += "!";

  name += "!";

  return (
    <div>
      <button
        onClick={() => {
          setValue(value + "!!!");
          console.log(value, "RERENDERED");
        }}
      >
        CLICK MEEE
      </button>
      <h1>I AM A TITLE AND MY NAME IS {bob}</h1>
      <h1>I AM A TITLE AND MY OTHER NAME IS {value}</h1>
    </div>
  );
}

// RERENDER
// <h1>I AM A TITLE AND MY OTHER NAME IS Jesse</h1>

// Click! Next value for value is Jesse!!!

// *console.log*

// RERENDER
// <h1>I AM A TITLE AND MY OTHER NAME IS Jesse!!!</h1>
