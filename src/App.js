import React from "react";
import KeyBoard from "./KeyBoard";
import "./App.css";

class App extends React.Component {
  // state = {
  //   total: null,
  //   next: null,
  //   command: null,
  // };

  // handleClick = buttonName => {
  //   this.setState(calculate(this.state, buttonName));
  // };

  render() {
    return (
      <div className="calculator">        
        <KeyBoard clickHandler={this.handleClick} />
      </div>
    );
  }
}

export default App