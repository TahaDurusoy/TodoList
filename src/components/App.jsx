import React, { useState } from "react";
import Heading from "./Heading";
import Form from "./Form";
import List from "./List";
import Button from "./Button";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setİtems] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function handleClick() {
    setİtems((p) => {
      return [...p, inputText];
    });
    setInputText("");
  }

  function handleClear() {
    setİtems([]);
  }

  return (
    <div className="container">
      <Heading />
      <Form value={inputText} onChange={handleChange} click={handleClick} />
      <List itemList={items} />
      <Button text="Clear" click={handleClear} />
    </div>
  );
}

export default App;
