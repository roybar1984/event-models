import React, { useState, useEffect } from "react";
import "./NextAndBackButtons.css";
import Btn from "../btn/Btn";
import { useHistory } from "react-router-dom";

function NextAndBackButtons(props) {
  const history = useHistory();
  
  const handleBack= ()=>{
    history.push(`/${props.back}`);
  }
  const handleNext = ()=>{
      history.push(`/${props.next}`);
  }

  return (
    <div className="prev-back-btns-container">
        <Btn className="prev-next-btn" handleClick={handleBack} buttonText="חזור" backClass="backClass" />
        <Btn className="prev-next-btn" handleClick={handleNext} buttonText="המשך" />
    </div>
  );
}

export default NextAndBackButtons;
