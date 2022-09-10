import React, { Component } from "react";

class Menu extends Component {
  render() {
    return (
      <div className="Menu">
        <a href="#header" className="App-Link header">
          Hi
        </a>
        <a href="#about" className="App-Link header">
          About Me
        </a>
        <a href="#tech" className="App-Link header">
          Tech I Use
        </a>
        <a href="#contact" className="App-Link header">
          Contact
        </a>
      </div>
    );
  }
}

export default Menu;
