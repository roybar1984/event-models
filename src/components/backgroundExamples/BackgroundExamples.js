import React, { useState, useEffect } from "react";
import "./BackgroundExamples.css";
import OpeningEventsExamples from "./../openingEventsExamples/OpeningEventsExamples";
import { gsap } from "gsap";

function BackgroundExamples(props) {
  const changeBorder = () => {
    props.setDidOpenAll((prevState) => prevState + 1);
    gsap.to(`.number${props.part}`, {
      ease: "sine",
      duration: 0.5,
      border: "0.6vh solid rgba(151,225,135,1)",
    });
  };

  return (
    <div className={`background-examples number${props.part}`}>
      <OpeningEventsExamples part={props.part} changeBorder={changeBorder} />
    </div>
  );
}

export default BackgroundExamples;
