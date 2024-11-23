import React from "react";

function Input(props) {
  return <input onChange={props.change} type="text" value={props.value} />;
}

export default Input;
