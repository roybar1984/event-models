import React, { useState, useEffect, useRef } from "react";
import "./Console.css";
import { Markup } from "interweave";

function Console(props) {
  const bottomRef = useRef();

  const scrollToBottom = () => {
    bottomRef.current.scrollTop =
      bottomRef.current.scrollHeight - bottomRef.current.clientHeight;
  };

  useEffect(() => {
    scrollToBottom();
  }, [props.actionsArray]);

  return (
    <div
      className="console"
      ref={bottomRef}
      style={{ width: `${props.width}`, height: `${props.height}` }}
    >
      {props.actionsArray.map((text, index) => {
        return (
          <div key={index}>
            {props.actionsArray[index] === `<p class="console-text">mousemove</p>` ? (
              <div className="move-div">
                <Markup content={props.actionsArray[index]} />
                <span className="move-counter">
                  {props.numOfRepeat !== 0 &&
                  (index - 1) / 3 === props.numOfRepeatArray.length
                    ? props.numOfRepeat
                    : props.numOfRepeatArray[(index - 1) / 3]}
                </span>
              </div>
            ) : (
              <div className="mouseout-div">
                <Markup content={props.actionsArray[index]} />
                {props.actionsArray[index] === '<p class="console-text">mouseout</p>' && (
                  <hr className="console-hr" />
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default Console;
