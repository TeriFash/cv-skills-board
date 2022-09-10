import React, { Component } from "react";

class BackgroundHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="Background-header">
        <div className="Background-header-wrapper">
          <div className="ocean">
            <div className="wave"></div>
            <div className="wave"></div>
          </div>
        </div>

        {this.props.children}
      </div>
    );
  }
}

export default BackgroundHeader;
