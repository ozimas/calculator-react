import React from "react";

class Button extends React.Component {
  render() {
    return (
      <button
        id={this.props.id}
        className="button"
        value={this.props.value}
        onClick={event => this.props.clickFunc(event)}
      >
        {this.props.value}
      </button>
    );
  }
}

export default Button;
