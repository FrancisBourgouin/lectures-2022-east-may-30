import { Component } from "react";

export default class Spy extends Component {
  constructor(props) {
    super(props);

    this.state = {
      x: 0,
      y: 0,
    };
  }

  report = (event) => {
    this.setState({ ...this.state, x: event.clientX, y: event.clientY });
  };

  componentDidMount() {
    console.log("RUNNING TO THE HORSE THINGY");
    document.addEventListener("click", this.report);
  }

  componentDidUpdate(oldProps, oldState) {
    if (oldState.x !== this.state.x) {
      console.log("Mouse moved on the screen");
    }
  }

  componentWillUnmount() {
    console.log("JUMP FROM THE HORSE THINGY AND STRIKE A POSE");
    console.log("OH NO NOT THE JAIL / FISHES / CIDER BLOCKS / PARTY");
    document.removeEventListener("click", this.report);
  }

  render() {
    return (
      <div>
        <h1>🕵️</h1>
      </div>
    );
  }
}
