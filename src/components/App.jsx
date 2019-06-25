import React from "react";
import "../assets/styles/index.css";
import Header from "./Header.jsx";
import Board from "./Board.jsx";
import Footer from "./Footer";

const PLAYERX = "Player 1 - Xs";
const PLAYER0 = "Player 2 - 0s";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      turn: PLAYERX,
      values: [["-", "-", "-"], ["-", "-", "-"], ["-", "-", "-"]],
      winner: "none",
      movements: 0
    };
    this.appClick = this.appClick.bind(this);
    this.resetClick = this.resetClick.bind(this);
  }

  appClick(rowNumber, columnNumber) {
    //if there's a winner, the app doesn't continue evaluating clics

    let movements = this.state.movements;
    let winner = this.state.winner;
    let valuesCopy = JSON.parse(JSON.stringify(this.state.values));
    let newMovement = this.state.turn === PLAYERX ? "X" : "0";
    //Evaluate a winner movement only if there was no winner declared previously
    if (this.state.winner === "none") {
      valuesCopy[rowNumber][columnNumber] = newMovement;
      if (this.evaluateWinnerMovement(valuesCopy)) {
        winner = this.state.turn;
      }
      movements = movements + 1;
      this.setState({
        turn: this.state.turn === PLAYERX ? PLAYER0 : PLAYERX,
        values: valuesCopy,
        movements: movements,
        winner: winner
      });
    }
  }

  resetClick() {
    let resetValues = {
      turn: PLAYERX,
      values: [["-", "-", "-"], ["-", "-", "-"], ["-", "-", "-"]],
      winner: "none",
      movements: 0
    };
    this.setState(resetValues);
  }

  evaluateWinnerMovement(values) {
    //evaluate rows
    for (var row = 0; row <= 2; row++) {
      if (
        values[row][0] !== "-" &&
        values[row][0] === values[row][1] &&
        values[row][0] === values[row][2]
      ) {
        return true;
      }
    }

    //evaluate columns
    for (var col = 0; col <= 2; col++) {
      if (
        values[0][col] !== "-" &&
        values[0][col] === values[1][col] &&
        values[0][col] === values[2][col]
      ) {
        return true;
      }
    }

    //evaluate diagonal "/""
    if (
      values[0][0] !== "-" &&
      values[0][0] === values[1][1] &&
      values[0][0] === values[2][2]
    ) {
      return true;
    }

    //evaluate diagonal "\"
    if (
      values[2][0] !== "-" &&
      values[2][0] === values[1][1] &&
      values[2][0] === values[0][2]
    ) {
      return true;
    }

    return false;
  }
  render() {
    let text = "Turn of " + this.state.turn;

    return (
      <div>
        <Header
          text={this.state.movements === 9 ? "No more moves" : text}
          winner={this.state.winner}
          playerX={this.state.turn === PLAYERX}
        />
        <Board values={this.state.values} appClick={this.appClick} />
        <Footer
          movements={this.state.movements}
          theresawinner={this.state.winner !== "none"}
          resetClick={this.resetClick}
        />
      </div>
    );
  }
}
