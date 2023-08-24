import React from "react";
import "./Square.css";
export default class Square extends React.Component {
  render() {
    return (
      <button onClick={() => this.props.onClick()} className="square">
        {this.props.value}
      </button>
    );
  }
}
