import React from "react";
import "./App.css";
import InputFilter from "../InputFilter";
import Table from "../Table";

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  componentDidMount() {}

  render() {
    return (
      <div className="wrapper">
        <InputFilter />
        <Table />
      </div>
    );
  }
}

export default App;
