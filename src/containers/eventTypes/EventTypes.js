import React, { useEffect } from "react";
import "./EventTypes.css";
import { gsap } from "gsap";
import NextAndBackButtons from "./../../components/nextAndBackButtons/NextAndBackButtons";
import CenteredText from "./../CenteredText/CenteredText"

function EventTypes(props) {
  useEffect(() => {
    gsap.to(".App", {
      ease: "sine",
      duration: 0.5,
      backgroundImage:
        "linear-gradient(to right top, #b62150, #961e56, #731f56, #511f4e, #321b40, #2d1f43, #282345, #232646, #303860, #3b4a7c, #465e9a, #4f73b8)",
    });
  }, []);

  return (
  <div>
      <CenteredText Data={props.Data} page={props.page}/>
      <NextAndBackButtons back={props.back} next={props.next} />
  </div>
  )
}

export default EventTypes;
