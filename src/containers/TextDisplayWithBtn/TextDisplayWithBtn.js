import React, { useState, useEffect } from "react";
import gsap from "gsap";
import { Markup } from "interweave";
import PlusBtn from "../../components/PlusBtn/PlusBtn";
import Btn from "./../../components/btn/Btn";
import "./TextDisplayWithBtn.css";
import { useHistory } from "react-router-dom";
import NextAndBackButtons from "./../../components/nextAndBackButtons/NextAndBackButtons";

function TextDisplayWithBtn(props) {
  let history = useHistory();
  const [clickNum, setClickNum] = useState(0);
  const [linesToShow, setLinesToShow] = useState([]);

  useEffect(() => {
    setLinesToShow((prevState) => [...prevState, clickNum]);
  }, [clickNum]);

  useEffect(() => {
    gsap
      .timeline()
      .from(`.delay-text${linesToShow.length}`, 1, {
        ease: "spin",
        duration: 0.75,
        delay: 0.2,
        opacity: 0,
      })
  }, [linesToShow]);

  useEffect(() => {
    gsap.to(".delay-display-btn", {
      display: "block",
      opacity: 1,
      duration: 2,
      ease: "spin",
      delay: 1,
    });
  }, [clickNum === props.maxClicksNum]);

  function handleClick(event) {
    if (clickNum < props.maxClicksNum) {
      setClickNum((prevState) => (prevState = prevState + 1));
      // gsap.to(".text-btn-container", {height: "+=5vh",ease:"spin",duration:1})
    }
    if (props.isEventListener) {
      gsap.to(".title", 0, { y: -45, ease: "ease" });
    }
  }

  function handleOver(event) {
    gsap.to(".cls-2", 0, { fill: " url(#linear-gradient-3)" });
    gsap.to(".cls-1", 0, { stroke: " url(#linear-gradient-3)" });
  }

  function handleLeave(event) {
    gsap.to(".cls-2", 0, { fill: " url(#linear-gradient-2)" });
    gsap.to(".cls-1", 0, { stroke: " url(#linear-gradient-2)" });
  }

  function handleClickNext(event) {
    history.push("/event-types");
  }

  return (
    <div className="text-title-btn-container">
      {props.isEventListener && (
        <h1 className="title title-9">{props.Data[props.page].title}</h1>
      )}
      <div className="text-btn-container">
        <div className="text-container">
          {linesToShow.map((line, index) => {
            return (
              <div key={index} className="paragrapghs">
                <Markup content={props.Data[props.page].text[line]} />
              </div>
            );
          })}
        </div>
        {clickNum < props.maxClicksNum ? (
          <PlusBtn
            handleLeave={handleLeave}
            handleOver={handleOver}
            handleClick={handleClick}
          />
        ) : (
          !props.isEventListener && (
            <div>
              <div className="delay-display-btn">
                <Btn
                  className="start-btn"
                  handleClick={handleClickNext}
                  buttonText="יאללה נתחיל"
                />
              </div>
            </div>
          )
        )}
      </div>
      {props.isEventListener && clickNum === props.maxClicksNum && (
        <div className="delay-display-btn">
          <NextAndBackButtons back={props.back} next={props.next} />
        </div>

        // <NextAndBackButtons className="delay-display-btn" back={props.back} next={props.next} />
      )}
    </div>
  );
}

export default TextDisplayWithBtn;
