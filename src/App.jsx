import { Component } from "react";
import "./App.css";

import { root } from "./main";

class App extends Component {
  state = {
    text: "default unmount button",
  };

  componentDidMount() {
    // open below will cause memory leak:
    // this.setState({
    //   text: "click me to unmout",
    // });
  }

  render() {
    return (
      <div onClick={() => root.unmount()}>{this.state.text}</div>
    );
  }
}

export default App;
