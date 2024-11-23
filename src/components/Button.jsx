import React from "react";

function Button(props) {
  return (
    <button onClick={props.click}>
      <span>{props.text}</span>
    </button>
  );
}

export default Button;
