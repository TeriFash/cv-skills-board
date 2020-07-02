import React, { Component } from "react";

import Tech from "./Content/Tech";
import About from "./Content/About";
import MainHeader from "./Content/MainHeader";

class Main extends Component {
  render() {
    return (
      <div className="App-main">
        <MainHeader />
        <Tech id="tech" />
        <About id="about" />
      </div>
    );
  }
}

export default Main;
