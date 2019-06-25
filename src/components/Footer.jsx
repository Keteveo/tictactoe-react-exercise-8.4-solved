import React from "react";

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.resetClick = this.resetClick.bind(this);
  }
  resetClick() {
    this.props.resetClick();
  }

  render() {
    return (
      <footer
        className={
          this.props.movements === 9 || this.props.theresawinner
            ? "footer winner"
            : "footer"
        }
      >
        <div>Number of movements: {this.props.movements}</div>
        <button className="footer-btn" onClick={this.resetClick}>
          Reset
        </button>
      </footer>
    );
  }
}
