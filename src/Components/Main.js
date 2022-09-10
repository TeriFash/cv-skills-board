import React, { Component } from "react";

import Tech from "./content/Tech";
import About from "./content/About";
import MainHeader from "./content/MainHeader";

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
