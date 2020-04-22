import Button from "./Button";
import React from "react";

function Panel(props) {
  const operations = props.operations;
  const operationButtons = operations.map((operations) => {
    return (
      <div className="calc-panel__row">
        {
          operations.map((operation) => {
            return (
              <Button operation={operation}/>
            )
          })
        }
      </div>
    );
  });

  return (
    <div className="calc-panel">
      {operationButtons}
    </div>
  )
}

export default Panel;