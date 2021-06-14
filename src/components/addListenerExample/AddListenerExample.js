// AddListenerExample
import React, { useEffect, useState, useRef } from "react";
import "./AddListenerExample.css";
import { gsap } from "gsap";

function AddListenerExample(props) {
  const [isListenerOn, setIsListenerOn] = useState(false);
  const bigRhomRef = useRef(null);
  const [clickNum, setClickNum] = useState(1);
  const bigRhomColore = [
    "(150deg, rgba(92,184,209,1) 5%, rgba(139,151,226,1) 12%, rgba(175,125,239,1) 34%, rgba(223,92,255,1) 49%, rgba(235,66,184,1) 69%, rgba(245,44,124,1) 88%, rgba(255,23,68,1) 97%)",
    "(154deg,  rgba(118,74,212,1) 5%, rgba(145,89,225,1) 12%, rgba(180,107,242,1) 34%, rgba(206,121,255,1) 49%, rgba(217,131,246,1) 69%, rgba(228,141,236,1) 88%, rgba(255,166,212,1) 97%)",
    "(150deg,rgba(251,210,92,1) 0%, rgba(251,174,105,1) 20%, rgba(251,152,113,1) 30%, rgba(251,119,125,1) 44%,rgba(249,123,162,1) 74%,rgba(247,126,197,1) 85%, rgba(243,132,255,1) 100%)",
    "(150deg, rgba(255,205,69,1) 0%, rgba(245,168,130,1) 16%, rgba(237,142,173,1) 36%, rgba(223,92,255,1) 52%, rgba(190,79,213,1) 67%, rgba(161,68,176,1) 90%, rgba(140,60,150,1) 100%)",
  ];

  const handleClickOnAdd = (event) => {
    setIsListenerOn(true);
    gsap.to(".add-event-listener-line", {
      ease: "sine",
      duration: 0.5,
      display: "block",
      delay: 0.5,
    });
    gsap.to(".description-to-add-listener", {
      ease: "sine",
      duration: 0.5,
      display: "none",
    });
  };
  const clickOnRahm = (event) => {
    if (isListenerOn) {
      if (clickNum === 4) {
        setClickNum(1);
      } else {
        setClickNum((prevState) => prevState + 1);
      }
    }
  };

  useEffect(() => {
    gsap.to(bigRhomRef.current, {
      ease: "sine",
      duration: 0.5,
      background: `linear-gradient${bigRhomColore[clickNum - 1]}`,
    });
  }, [clickNum]);

  return (
    <div className="add-listener-example">
      <div
        // ref={buttonRef}
        // onMouseEnter={handleHover}
        onClick={handleClickOnAdd}
        className="add-listener-btn btns"
      >
        הוסף מאזין
      </div>
      <svg
        viewBox="0 0 225.41 330.52"
        className="rhombus-listener"
        //   onClick={handleClick}
      >
        <g className=" btns" onClick={clickOnRahm}>
          <foreignObject
            ref={bigRhomRef}
            x="37.87"
            y="98.65"
            width="136.88"
            height="136.88"
            className="big-rhom "
            transform="translate(-87.01 124.11) rotate(-45)"
          ></foreignObject>
          <g id="text">
            <text className="event-text" transform="translate(67.71 170.86)">
              לחצו עליי
            </text>
          </g>
        </g>
      </svg>
    </div>
  );
}

export default AddListenerExample;
