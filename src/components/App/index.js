import React from "react";
import "./App.css";
import Browse from "../Browse";

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  componentDidMount() {}

  render() {
    return (
      <div className="wrapper">
        <Browse />
      </div>
    );
  }
}

export default App;
