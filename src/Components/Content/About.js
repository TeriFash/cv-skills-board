import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <div className="App-Content" id="about">
        <h3>About Me</h3>
        <p>
          Hello everyone reading this{" "}
          <span role="img" aria-label="Sparkles">
            &#10024;
          </span>
          . As the header implies, my name is Viktor and I'm a Front-end
          developer (and sometimes full-stack) from uruguay.
        </p>
        <p>
          I've been working for a couple of years with web technologies (since
          2017), but I started studying computer science on 2015{" "}
          <span role="img" aria-label="rocketLauncher">
            &#128640;
          </span>
          .
        </p>
        <p>
          Nowadays I'm working at a private company as a developer
          <span role="img" aria-label="fire">
            &#128293;
          </span>
          , where I use technologies such as VueJs, CordovaJs CSS3, HTML5, ES6
        </p>
      </div>
    );
  }
}

export default About;
