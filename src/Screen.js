import React from "react";

function Screen(props) {
  return (
    <div className="calc-screen">
      <div className="calc-screen__history">
        -
      </div>
      <input className="calc-screen__result" placeholder="0" />
    </div>
  )
}

export default Screen;