import React, { Component } from "react";
// import SocialLink from "./Content/SocialLink";

class Footer extends Component {
  render() {
    return (
      <footer className="App-footer">
        <div className="FindMe" id="contact"> 
        <h5>
          Find me on:
          <a
            href="https://github.com/TeriFash"
            target="_blanck"
            className="App-Link contact"
          >
            GitHub
          </a>
          {/* <SocialLink /> */}
        </h5>
        </div>
      </footer>
    );
  }
}

export default Footer;
