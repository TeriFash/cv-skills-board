import React, { Component } from "react";


function MainHeaderComponent() {
  return (
    <section className="Main-Header">
      <h5>Hi friend</h5>
      <h1>This board visualise my skills</h1>
    </section>
  );
}

class MainHeader extends Component {
  render() {
    return (
      <MainHeaderComponent />
    );
  }
}

export default MainHeader;
