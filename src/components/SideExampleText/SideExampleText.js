import React from "react";
import { Markup } from "interweave";
import "./SideExampleText.css";

function SideExampleText(props) {
  console.log(props.Data);
  return (
    <div className="title-text-container">
      <h1 className="main-title side-example-text-title">
        {props.Data[props.page].title}
      </h1>
      <div>
        <Markup content={props.Data[props.page].text} />
      </div>
    </div>
  );
}

export default SideExampleText;
