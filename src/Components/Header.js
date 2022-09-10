import React, { Component } from "react";
import BackgroundHeader from "./content/BackgroundHeader";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    let isOpen = this.state.isOpen;
    this.setState({
      isOpen: !isOpen
    });
  }

  render() {
    return (
      <header className="App-header" id="header">
        <BackgroundHeader>
        <h1 className="App-header-brand">
            <a
              target="_blanck"
              className="App-Link"
              href="https://terifash.pro"
            >
              Teri Fash
            </a>
        </h1>
        </BackgroundHeader>
      </header>
    );
  }
}

export default Header;
