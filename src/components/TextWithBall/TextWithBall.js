import React, { useState, useEffect } from "react";
import "./TextWithBall.css";
import { Markup } from "interweave";
import gsap from "gsap";

function TextWithBall(props) {
  const mouseEventsExamples = props.Data[props.page].text.map((item) => {
    return item;
  });

  useEffect(() => {
    const mouseEventsTl = gsap.timeline();
    mouseEventsTl.to
    (".centered-text-container", 1, {
        y: "-=10vh",
        x: "+=0vw",
        duration: 2,
        ease: "spin",
        delay: 0.6,
      }).to
      (".delay-ball-part", {
        opacity: 1,
        duration: 2,
        ease: "spin",
      },"-=0.6")
      .to(
      ".delay-show-container",
      {
        opacity: 1,
        duration: 0.5,
        ease: "spin",
      },
      "-=0.6"
    );
    mouseEventsExamples.forEach((element, index) => {
      if (index !== 0) {
        let tl = gsap.timeline();
        tl.to(`.delay-show-item${index}`, 1, { opacity: 1, duration: 0.2 });
        tl.to(`.ball-line`, 1, { height: " +=3.2vh", duration: 0.3 }, "-=1");
        tl.to(
          `.small-ball`,
          1,
          { y: "+=3.2vh", x: "+=0vw", duration: 0.3 },
          "-=1"
        );
        mouseEventsTl.add(tl);
      }
    });
    mouseEventsTl.to(".delay-display-btn", {
      display: "block",
      opacity:1,
      duration: 3,
      ease: "spin",
    });
  }, []);

  return (
    <div className="mouse-events-contaier delay-show-container">
      {mouseEventsExamples.map((item, index) => {
        if (index !== 0) {
          return (
            <div
              className={`delay-show-items delay-show-item${index}`}
              key={index}
            >
              <Markup content={props.Data[props.page].text[index]} />
            </div>
          );
        }
      })}
      <div>
        <hr className="delay-ball-part ball-line" />
        <svg className="delay-ball-part small-ball" viewBox="0 0 20.25 20.25">
          <defs>
            <radialGradient
              id="radial-gradient"
              cx="9.49"
              cy="11.33"
              fx="-5.250462795858832"
              r="15.29"
              gradientTransform="translate(19.82 0.55) rotate(83.26) scale(1 1.02)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#5cb8d1" />
              <stop offset="0.04" stopColor="#6cadd7" />
              <stop offset="0.26" stopColor="#be73f4" />
              <stop offset="0.37" stopColor="#df5cff" />
              <stop offset="0.4" stopColor="#e158f5" />
              <stop offset="0.47" stopColor="#e54eda" />
              <stop offset="0.55" stopColor="#ed3eae" />
              <stop offset="0.64" stopColor="#f72873" />
              <stop offset="0.71" stopColor="#ff1744" />
              <stop offset="0.74" stopColor="#e81747" />
              <stop offset="0.87" stopColor="#851755" />
              <stop offset="0.93" stopColor="#5e175b" />
            </radialGradient>
          </defs>
          <title>small-ball</title>
          <g id="Layer_2" data-name="Layer 2">
            <g id="elements">
              <circle
                className="cls-1-small-ball"
                cx="10.12"
                cy="10.12"
                r="10.12"
              />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

export default TextWithBall;
