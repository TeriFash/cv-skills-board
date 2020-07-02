import React, { Component } from "react";

class Menu extends Component {
  render() {
    return (
      <div className="Menu">
        <a href="#about" className="App-Link header">
          About Me
        </a>
        <a href="#tech" className="App-Link header">
          Tech I Use
        </a>
        <a href="#academics" className="App-Link header">
          Academics
        </a>
        <a href="#contact" className="App-Link header">
          Contact
        </a>
      </div>
    );
  }
}

export default Menu;
