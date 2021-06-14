import NextAndBackButtons from "../nextAndBackButtons/NextAndBackButtons";
import "./CodeExamples.css";
// import CodeBlockExample from "./../../components/codeBlockExample/CodeBlockExample";
import BlackCodeBlock from "../blackCodeBlock/BlackCodeBlock";
import AddListenerExample from "../addListenerExample/AddListenerExample";

function CodeExamples(props) {
  console.log(props.Data[props.page].codeText[1]);
  return (
    <div>
      <h1 className="main-title code-example-title">
        {props.Data[props.page].title}
      </h1>
      {/* <CodeBlockExample /> */}
      <div className="code-block-example-container">
        <BlackCodeBlock
          codeBlocksText={props.Data[props.page].codeText[0]}
          className="block-with-border code-font"
        />
        <div className="code-examples-part">
          <div className="code-blocks-side">
            <p className="code-type">HTML: </p>
            <BlackCodeBlock
              codeBlocksText={props.Data[props.page].codeText[1]}
            className="html-code-block code-font"
            />
            <p className="code-type">js: </p>
            <BlackCodeBlock
              codeBlocksText={props.Data[props.page].codeText[2]}
              className="js-code-block code-font"
            />
          </div>
          <AddListenerExample />
        </div>
      </div>
      <NextAndBackButtons next={props.next} back={props.back} />
    </div>
  );
}

export default CodeExamples;
