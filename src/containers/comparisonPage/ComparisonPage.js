import TextWithBall from "./../../components/TextWithBall/TextWithBall"
function ComparisonPage (props) {
    console.log(props.Data[props.page]);
    return (
        <div className="comparison-parts-container">
            <h1>{props.Data[props.page].text[0].subtitle}</h1>
            {/* <TextWithBall
              Data={props.Data}
              page={19}
              isArray={true}
              isBall={true}
              isComparison = {true}
              indexOfArray= {0}
              type="anonymous"
            /> */}
            <h1>{props.Data[props.page].text[1].subtitle}</h1>
              {/* <TextWithBall
              Data={props.Data}
              page={19}
              isArray={true}
              isBall={true}
              isComparison = {true}
              indexOfArray= {1}
              type="name"
            />  */}
        </div>
    )
}

export default ComparisonPage;