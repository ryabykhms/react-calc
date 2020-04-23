import Button from "./Button";
import React from "react";

function Panel(props) {
  const operations = props.operations;
  const onButtonClick = props.onButtonClick;

  const operationButtons = operations.map((operations, id) => {
    return (
      <div className="calc-panel__row" key={id}>
        {
          operations.map((operation, idx) => {
            return (
              <Button key={idx} operation={operation} onButtonClick={onButtonClick} />
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