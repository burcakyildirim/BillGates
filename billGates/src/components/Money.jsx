import React from "react";
import App from "../App";

const Money = ({totalMoney}) => {
  return (
    <div className="money-container">
        <h2>${totalMoney}</h2>
    </div>
  )
}

export default Money