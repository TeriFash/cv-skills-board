import React, { Component } from "react";

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
      <div>
        <header className="App-header">
          <h1>Teri Fash</h1>
        </header>
      </div>
    );
  }
}

export default Header;
