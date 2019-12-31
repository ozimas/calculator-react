import React from "react";
import Button from "./Button";
import Result from "./Result";

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          result: 0
        };
    }
    render(){
        return (<div className="calculator">
                <Result value={this.state.result} />
                <div className="buttons__container">
                    <Button value="1" id="one"/>
                    <Button value="2" id="two"/>
                    <Button value="3" id="three"/>
                    <Button value="+" id="add"/>
                    <Button value="4" id="four"/>
                    <Button value="5" id="five"/>
                    <Button value="6" id="six"/>
                    <Button value="-" id="subtract"/>
                    <Button value="7" id="seven"/>
                    <Button value="8" id="eight"/>
                    <Button value="9" id="nine"/>
                    <Button value="/" id="divvalue"/>
                    <Button value="." id="decimal" />
                    <Button value="0" id="zero"/>
                    <Button value="AC" id="clear" />
                    <Button value="*" id="multiply"/>
                    <Button value="=" idString="equals"/>
                </div>
            </div>
        );
      }
}

export default Calculator;