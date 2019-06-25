import React from "react";

export default class Header extends React.Component {
  render() {
    return (
      <header
        className={
          this.props.winner !== "none" || this.props.text === "No more moves"
            ? "header winner"
            : this.props.playerX
            ? "header player-x"
            : "header player-0"
        }
      >
        {this.props.winner !== "none"
          ? "There's a Winner: " + this.props.winner
          : this.props.text}
      </header>
    );
  }
}
