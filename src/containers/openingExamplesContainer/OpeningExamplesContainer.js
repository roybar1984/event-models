import React, { useState, useEffect } from "react";
import "./OpeningExamplesContainer.css";
import BackgroundExamples from "../../components/backgroundExamples/BackgroundExamples";
import Btn from "./../../components/btn/Btn";
import { gsap } from "gsap";
import { useHistory } from "react-router-dom";

function OpeningExamplesContainer(props) {
  const history = useHistory();
  const [didOpenAll, setDidOpenAll] = useState(0);

  function handleClickNext(event) {
    history.push("/intro");
  }

  useEffect(() => {
    if (didOpenAll === 3) {
      gsap.to(".after-examples", {
        ease: "sine",
        duration: 0.75,
        delay: 0.5,
        opacity: 1,
      });
    }
  }, [didOpenAll]);
  return (
    <div className="opening-exampels">
      <div className="exampels-part">
        <BackgroundExamples setDidOpenAll={setDidOpenAll} part="1" />
        <BackgroundExamples setDidOpenAll={setDidOpenAll} part="2" />
        <BackgroundExamples setDidOpenAll={setDidOpenAll} part="3" />
      </div>
      <div className="after-examples">
        <p>{props.Data[props.page].text}</p>
        <Btn handleClick={handleClickNext} buttonText="בואו נגלה" />
      </div>
    </div>
  );
}

export default OpeningExamplesContainer;
