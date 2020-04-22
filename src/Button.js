import React from "react";

function Button(props) {
  const operation = props.operation;
  return (
    <button className="calc-button">
      {operation}
    </button>
  )
}

export default Button;