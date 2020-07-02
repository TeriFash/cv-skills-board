import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer className="App-footer">
        <h2>Find me on:</h2>
        <div className="FindMe" id="contact">
          <a
            href="https://github.com/TeriFash"
            target="_blanck"
            className="App-Link contact"
          >
            GitHub
          </a>
        </div>
      </footer>
    );
  }
}

export default Footer;
