import React from "react";
import "../assets/css/clear.css";

function Clear(props) {
  return (
    <div className="buttom-clear" onClick={props.handleClear}>
      {props.children}
    </div>
  );
}

export default Clear;
