import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer className="App-footer">
        <h2>
          Find me on:
          <a
            href="https://github.com/TeriFash"
            target="_blanck"
            className="App-Link contact"
          >
            GitHub
          </a>
        </h2>
        <div className="FindMe" id="contact" />
      </footer>
    );
  }
}

export default Footer;
