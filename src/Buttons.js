import Operation from "./Operation";
import React from "react";

function Buttons(props) {
  const operations = props.operations;
  const operationButtons = operations.map((operation) => {
    return (
      <Operation operation={operation} />
    )
  });

  return (
    <div>
      {operationButtons}
    </div>
  )
}

export default Buttons;