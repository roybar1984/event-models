import React from "react";
import "./MouseClickContainer.css";
import EventsExamples from "./../../components/eventsExamples/EventsExamples";
import SideExampleText from "../../components/SideExampleText/SideExampleText";
import NextAndBackButtons from "./../../components/nextAndBackButtons/NextAndBackButtons";
import CenteredText from "../CenteredText/CenteredText";

function MouseClickContainer(props) {
  return (
    <div>
      <div className="mouse-click-container">
        <SideExampleText page={props.page} Data={props.Data} />
        <EventsExamples page={props.page} />
      </div>
      <NextAndBackButtons back={props.back} next={props.next} />
    </div>
  );
}

export default MouseClickContainer;
