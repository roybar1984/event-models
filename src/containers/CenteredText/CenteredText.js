import React from "react";
import "./CenteredText.css";
import { Markup } from "interweave";
import TextWithBall from "./../../components/TextWithBall/TextWithBall";
import TextWithCodeBlocks from "../../components/TextWithCodeBlocks/TextWithCodeBlocks";
import BlackCodeBlock from "./../../components/blackCodeBlock/BlackCodeBlock";
import SmallDot from "./../../svg/dots-for-nav.svg";

function CenteredText(props) {
  console.log(props.hasEndCodeBlock);
  return (
    <div className="centered-text-container">
      {props.hasSmallDots && (
        <svg className="dots-container" viewBox="0 0 46.13 14.02">
          <g id="Layer_2" data-name="Layer 2">
            <g id="elements">
              <circle
                className={`dots ${props.isFirstPage ? "selected-dot" : "empty-dot"}`}
                cx="39.12"
                cy="7.01"
                r="6.51"
              />
              <circle className={`dots ${!props.isFirstPage ? "selected-dot" : "empty-dot"}`} cx="7.01" cy="7.01" r="6.51" />
            </g>
          </g>
        </svg>
      )}
      <h1 className="main-title title">{props.Data[props.page].title}</h1>
      {props.hasStartCodeBlock && (
        <BlackCodeBlock
          codeBlocksText={props.Data[props.page].codeText}
          className="block-with-border code-font"
        />
      )}
      <div className="centered-text">
        {props.hasCodeBlock ? (
          <TextWithCodeBlocks
            Data={props.Data}
            page={props.page}
            codeBlocksText={props.Data[props.page].codeText}
            isFunctions={props.isFunctions}
            className="block-with-border code-font"
          />
        ) : props.isArray ? (
          <div className="text-with-examples-container">
            <Markup content={props.Data[props.page].text[0]} />
            {props.isBall && (
              <TextWithBall Data={props.Data} page={props.page} />
            )}
          </div>
        ) : (
          <div>
            <Markup content={props.Data[props.page].text} />
            {props.hasEndCodeBlock && (
              <BlackCodeBlock
                codeBlocksText={props.Data[props.page].codeText}
                className="block-with-border code-font"
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default CenteredText;
