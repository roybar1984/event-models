import "./BlackCodeBlock.css";
import { Markup } from "interweave";
function BlackCodeBlock(props) {
  return (
    <div className={`black-code-block-container  ${props.className}`}>
      <Markup content={props.codeBlocksText} />
    </div>
  );
}

export default BlackCodeBlock;
