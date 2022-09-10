import React, { Component } from "react";
import SocialLink from "./content/SocialLink";

class Footer extends Component {
  render() {
    return (
      <footer className="App-footer">
        <div className="FindMe" id="contact"> 
          <span className="FindMe-text">
            Find me on:
          </span>
          <SocialLink />
        </div>
      </footer>
    );
  }
}

export default Footer;
