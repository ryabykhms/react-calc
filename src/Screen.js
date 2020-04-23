import React from "react";

function Screen(props) {
  const result = props.result;
  return (
    <div className="calc-screen">
      <div className="calc-screen__history">
        -
      </div>
      <input className="calc-screen__result" placeholder="0" value={result} onChange={props.onChange} />
    </div>
  )
}

export default Screen;