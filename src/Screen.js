import React from "react";

function Screen(props) {
  return (
    <div>
      {props.firstOperand} {props.operation}  {props.secondOperand}
    </div>
  )
}

export default Screen;