import React, { Component } from "react";
import BackgroundHeader from "./Content/BackgroundHeader";

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
      <>
        <header className="App-header">
        <BackgroundHeader />
          <h1>
            <a
              target="_blanck"
              className="App-Link"
              href="https://terifash.pro"
            >
              Teri Fash
            </a>
          </h1>
        </header>
      </>
    );
  }
}

export default Header;
