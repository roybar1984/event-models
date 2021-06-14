import React from "react";
import OpeningExamplesContainer from "./containers/openingExamplesContainer/OpeningExamplesContainer";
import Data from "./data/text.json";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TextDisplayWithBtn from "./containers/TextDisplayWithBtn/TextDisplayWithBtn";
// import EventTypes from "./containers/eventTypes/EventTypes";
import MouseEventConteiner from "./containers/mouseEventConteiner/MouseEventConteiner";
import CodeExamples from "./components/codeExamples/CodeExamples";

import MouseClickContainer from "./containers/mouseClickContainer/MouseClickContainer";
import CenteredText from "./containers/CenteredText/CenteredText";
import TextWithBall from "./components/TextWithBall/TextWithBall";
import ComparisonPage from "./containers/comparisonPage/ComparisonPage"

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            {/* <HomePage /> */}
          </Route>
          <Route path="/opening-examples">
            <OpeningExamplesContainer Data={Data} page={1} />
          </Route>
          <Route exact path="/intro">
            <TextDisplayWithBtn
              isEventListener={false}
              maxClicksNum={2}
              Data={Data}
              page={2}
            />
          </Route>
          <Route exact path="/event-types">
            <MouseEventConteiner
              back="intro"
              next="event-types/mouse-events"
              Data={Data}
              page={3}
            />
          </Route>
          <Route exact path="/event-types/mouse-events">
            <MouseEventConteiner
              back="event-types"
              next="event-types/mouse-events/click"
              Data={Data}
              page={4}
              isArray={true}
              isBall={true}
            />
          </Route>
          <Route exact path="/event-types/mouse-events/click">
            <MouseClickContainer
              back="event-types/mouse-events"
              next="event-types/mouse-events/move"
              Data={Data}
              page={5}
            />
          </Route>
          <Route exact path="/event-types/mouse-events/move">
            <MouseClickContainer
              back="event-types/mouse-events/click"
              next="event-types/input-events"
              Data={Data}
              page={6}
            />
          </Route>
          <Route exact path="/event-types/input-events">
            <MouseClickContainer
              back="event-types/mouse-events/move"
              next="event-types/load-event"
              Data={Data}
              page={7}
            />
          </Route>
          <Route exact path="/event-types/load-event">
            <MouseEventConteiner
              back="event-types/input-events"
              next="event-listeners"
              Data={Data}
              page={8}
            />
          </Route>
          <Route exact path="/event-listeners">
            <TextDisplayWithBtn
              isEventListener={true}
              maxClicksNum={1}
              Data={Data}
              page={9}
              back="event-types/load-event"
              next="event-listeners/add-event-listeners"
            />
          </Route>
          <Route exact path="/event-listeners/add-event-listeners">
            <MouseEventConteiner
              back="event-listeners"
              next="event-listeners/add-event-listeners-example"
              Data={Data}
              page={10}
              hasStartCodeBlock={true}
            />
          </Route>
          <Route exact path="/event-listeners/add-event-listeners-example">
            <CodeExamples
              back="event-listeners/add-event-listeners"
              next="event-listeners/remove-event-listener"
              codeBlocksText={Data[13].codeText}
              Data={Data}
              // codeBlocksText={Data[11].codeText}
              page={11}
            />
          </Route>
          <Route path="/event-listeners/remove-event-listener">
            <MouseEventConteiner
              back="event-listeners/add-event-listeners-example"
              next="event-listeners/remove-event-listeners-example"
              Data={Data}
              isArray={true}
              hasCodeBlock={true}
              page={12}
            />
          </Route>
          <Route exact path="/event-listeners/remove-event-listeners-example">
            <CodeExamples
              back="event-listeners/remove-event-listener"
              next="functions"
              codeBlocksText={Data[13].codeText}
              Data={Data}
              page={13}
            />
          </Route>
          <Route path="/functions">
            <MouseEventConteiner
              back="event-listeners/remove-event-listeners-example"
              next="anonymous-functions"
              Data={Data}
              isArray={true}
              hasCodeBlock={true}
              isFunctions={true}
              page={14}
            />
          </Route>
          <Route path="/anonymous-functions">
            <MouseEventConteiner
              back="functions"
              next="anonymous-functions-continue"
              Data={Data}
              isArray={true}
              hasCodeBlock={true}
              hasSmallDots={true}
              isFirstPage={true}
              page={15}
            />
          </Route>
          <Route path="/anonymous-functions-continue">
            <MouseEventConteiner
              back="anonymous-functions"
              next="arguments.callee"
              Data={Data}
              isArray={true}
              hasCodeBlock={true}
              hasSmallDots={true}
              page={16}
            />
          </Route>
          <Route path="/arguments.callee">
            <MouseEventConteiner
              back="anonymous-functions-continue"
              next="arguments.callee-continue"
              Data={Data}
              hasEndCodeBlock={true}
              hasSmallDots={true}
              isFirstPage={true}
              page={17}
            />
          </Route>
          <Route path="/arguments.callee-continue">
            <MouseEventConteiner
              back="arguments.callee"
              next="function-comparison"
              Data={Data}
              hasEndCodeBlock={true}
              hasSmallDots={true}
              page={18}
            />
          </Route>
          <Route exact path="/function-comparison">
            <ComparisonPage Data={Data} page={19}/>
            {/* <TextWithBall
              back="arguments.callee-continue"
              next="event-types/mouse-events/click"
              Data={Data}
              page={19}
              isArray={true}
              isBall={true}
              isComparison = {true}
              indexOfArray= {0}
              type="anonymous"
            />
              <TextWithBall
              back="arguments.callee-continue"
              next="event-types/mouse-events/click"
              Data={Data}
              page={19}
              isArray={true}
              isBall={true}
              isComparison = {true}
              indexOfArray= {1}
              type="name"
            /> */}
          </Route>
          <Route exact path="/event">
            <MouseEventConteiner
              back="function-comparison"
              next="event-listeners"
              Data={Data}
              page={20}
            />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
