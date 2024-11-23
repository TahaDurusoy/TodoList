import React from "react";
import Button from "./Button";
import Input from "./Input";

function Form(props) {
  return (
    <div className="form">
      <Input change={props.onChange} />
      <Button click={props.click} text="Add" value={props.value} />
    </div>
  );
}

export default Form;
