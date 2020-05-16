import Button from "./Button";
import React from "react";

function Panel(props) {
  const operationsList = props.operations;
  const onButtonClick = props.onButtonClick;

  const operationButtons = operationsList.map((operations, id) => {
    return (
      <div className="calc-panel__row" key={id}>
        {
          operations.map((operation, idx) => {
            return (
              <Button key={idx} operation={operation} onButtonClick={onButtonClick}/>
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