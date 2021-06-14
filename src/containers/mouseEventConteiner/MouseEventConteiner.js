import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import "./MouseEventConteiner.css";
import CenteredText from "../CenteredText/CenteredText";
import NextAndBackButtons from "./../../components/nextAndBackButtons/NextAndBackButtons";
import TextWithCodeBlocks from "../../components/TextWithCodeBlocks/TextWithCodeBlocks.js";
import BlackCodeBlock from "./../../components/blackCodeBlock/BlackCodeBlock";

function MouseEventConteiner(props) {
  console.log(props.hasEndCodeBlock);
  useEffect(() => {
    gsap.to(".App", {
      ease: "sine",
      duration: 0.5,
      backgroundImage:
        "linear-gradient(to right top, #b62150, #961e56, #731f56, #511f4e, #321b40, #2d1f43, #282345, #232646, #303860, #3b4a7c, #465e9a, #4f73b8)",
    });
  }, []);

  return (
    <div className="mouse-event-container">
      <CenteredText
        Data={props.Data}
        page={props.page}
        isArray={props.isArray}
        isBall={props.isBall}
        hasCodeBlock={props.hasCodeBlock}
        hasStartCodeBlock={props.hasStartCodeBlock}
        isFunctions={props.isFunctions}
        hasSmallDots={props.hasSmallDots}
        hasEndCodeBlock={props.hasEndCodeBlock}
        isFirstPage={props.isFirstPage}
      />
      <div className={`${props.isBall ? "delay-display-btn" : "show-btns"} `}>
        <NextAndBackButtons back={props.back} next={props.next} />
      </div>
    </div>
  );
}

export default MouseEventConteiner;
