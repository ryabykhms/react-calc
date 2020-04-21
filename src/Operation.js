import React from "react";

function Operation(props) {
  const operation = props.operation;
  return (
    <button>
      {operation}
    </button>
  )
}

export default Operation;