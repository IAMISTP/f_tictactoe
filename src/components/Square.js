import React from "react";
import "./Square.css";
export default class Square extends React.Component {
  render() {
    return (
      <button onClick={() => console.log("click")} className="square">
        {this.props.value}
      </button>
    );
  }
}
