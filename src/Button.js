import React from "react";

function Button(props) {
  const operation = props.operation;
  const onButtonClick = props.onButtonClick;
  return (
    <button className="calc-button" onClick={onButtonClick} value={operation}>
      {operation}
    </button>
  )
}

export default Button;