import React from "react";

function Screen(props) {
  const result = props.result;
  const history = props.history;
  const onHistoryClick = props.onHistoryClick;
  return (
    <div className="calc-screen">
      <div className="calc-screen__history" onClick={onHistoryClick}>
        {history}
      </div>
      <input className="calc-screen__result" placeholder="0" value={result} onChange={props.onChange} />
    </div>
  )
}

export default Screen;