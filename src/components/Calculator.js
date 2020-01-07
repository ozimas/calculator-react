import React from "react";
import Button from "./Button";
import Result from "./Result";

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      calculation: 0,
      result: 0,
      finishResult: false
    };
    this.clickNumberButton = this.clickNumberButton.bind(this);
    this.clickSpecialChar = this.clickSpecialChar.bind(this);
    this.clickDecimalButton = this.clickDecimalButton.bind(this);
    this.clickClearResult = this.clickClearResult.bind(this);
    this.clickResultFinish = this.clickResultFinish.bind(this);
  }
  clickNumberButton(event) {
    if(this.isZero(this.state.calculation)) {
      this.setState({ calculation: event.target.value });
    } else {
      this.setState({ calculation: this.state.calculation + event.target.value });
    }
  }
  clickSpecialChar(event) {
    let res = this.isZero(this.state.result) ? '' : this.state.result;
    this.setState({ 
      result: res + this.state.calculation + event.target.value,
      calculation: 0
    });
  }
  clickDecimalButton(event) {
    if (!this.hasDecimalChar(this.state.calculation)) {
      this.setState({
        calculation: this.state.calculation + event.target.value
      });
    }
  }
  clickClearResult() {
    this.setState({
      result: 0,
      calculation: 0,
      finishResult: false
    });
  }
  clickResultFinish(event) {
    let equalChar = ' = ';
    this.setState({
      result: this.state.result + this.state.calculation
    }, () => {
      // eslint-disable-next-line
      let res = eval(this.state.result);
      this.setState({
        result: this.state.result + equalChar + res,
        finishResult: true
      })
    });
  }
  isZero(arg) {
    return /^0$/.test(arg);
  }
  hasDecimalChar(arg){
    return /\./.test(arg);
  }
  render() {
    return (
      <div className="calculator">
        <Result result={this.state.result} calculation={this.state.calculation}/>
        <div className={`buttons__container ${this.state.finishResult ? "disabled" : ""}`}>
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