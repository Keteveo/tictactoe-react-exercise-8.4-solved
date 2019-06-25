import React from "react";

export default class Square extends React.Component {
  constructor(props) {
    super(props);
    this.squareClick = this.squareClick.bind(this);
  }
  squareClick() {
    if (this.props.value === "-") {
      this.props.boardClick(this.props.rowIndex, this.props.columnIndex);
    }
  }
  render() {
    return (
      <button
        onClick={this.squareClick}
        className={
          this.props.value === "-"
            ? "btn clickable"
            : this.props.value === "X"
            ? "btn not-clickable player-x"
            : "btn not-clickable player-0"
        }
      >
        {this.props.value}
      </button>
    );
  }
}
