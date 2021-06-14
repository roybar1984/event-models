import React, {useEffect, useRef} from "react";
import "./Btn.css";
import { gsap } from "gsap";

function Btn(props) {
  const buttonRef = useRef(null);
  const handleHover =()=> {
    if(buttonRef.current.className === "backClass") {
      gsap.to(buttonRef.current, {
        ease: "sine",
        duration: 0.25,
        background: "linear-gradient(90deg,rgba(187, 55, 254, 1) 0%,rgba(251, 210, 92, 1) 52%,rgba(151, 255, 135, 1) 100%);"
      });
    } else {
      gsap.to(buttonRef.current, {
        ease: "sine",
        duration: 0.25,
        background: "linear-gradient(90deg,rgba(187, 55, 254, 1) 100%,rgba(251, 210, 92, 1) 52%,rgba(151, 255, 135, 1) 0%);"
      });

    }
  }
  return (
    <div
    ref={buttonRef}
    onMouseEnter={handleHover}
      onClick={props.handleClick}
      className={`${props.backClass} event-text cls-2-btn btns text-btns ${props.className}`}
    >
      {props.buttonText}
    </div>
  );
}

export default Btn;
