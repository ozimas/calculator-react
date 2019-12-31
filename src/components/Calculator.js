import React from "react";
import Button from "./Button";
import Result from "./Result";

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          result: 0
        };
        this.clickNumberButton = this.clickNumberButton.bind(this);
        this.clickSpecialChar = this.clickSpecialChar.bind(this);
        this.clickDecimalButton = this.clickDecimalButton.bind(this);
        this.clickClearResult = this.clickClearResult.bind(this);
        this.clickResultFinish = this.clickResultFinish.bind(this);
    }
    clickNumberButton(){}
    clickSpecialChar(){}
    clickDecimalButton(){}
    clickClearResult(){}
    clickResultFinish(){}
    render(){
        return (<div className="calculator">
                <Result value={this.state.result} />
                <div className="buttons__container">
                <Button value="1" id="one" clickFunc={this.clickNumberButton} />
                <Button value="2" id="two" clickFunc={this.clickNumberButton} />
                <Button value="3" id="three" clickFunc={this.clickNumberButton} />
                <Button value="+" id="add" clickFunc={this.clickSpecialChar} />
                <Button value="4" id="four" clickFunc={this.clickNumberButton} />
                <Button value="5" id="five" clickFunc={this.clickNumberButton} />
                <Button value="6" id="six" clickFunc={this.clickNumberButton} />
                <Button value="-" id="subtract" clickFunc={this.clickSpecialChar} />
                <Button value="7" id="seven" clickFunc={this.clickNumberButton} />
                <Button value="8" id="eight" clickFunc={this.clickNumberButton} />
                <Button value="9" id="nine" clickFunc={this.clickNumberButton} />
                <Button value="/" id="divvaluee" clickFunc={this.clickSpecialChar} />
                <Button value="." id="decimal" clickFunc={this.clickDecimalButton} />
                <Button value="0" id="zero" clickFunc={this.clickNumberButton} />
                <Button value="AC" id="clear" clickFunc={this.clickClearResult} />
                <Button value="*" id="multiply" clickFunc={this.clickSpecialChar} />
                <Button value="=" id="equals" clickFunc={this.clickResultFinish} />
                </div>
            </div>
        );
      }
}

export default Calculator;