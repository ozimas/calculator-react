import React from "react";

class Result extends React.Component {
  render() {
    return (
      <div class="result__container">
        <div className="result-value">{this.props.result}</div>
        <div className="calculation-value">{this.props.calculation}</div>
      </div>
    );
  }
}

export default Result;
