import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <div className="App-Content" id="about">
        <h3>About Me</h3>
        <p>
          Hello everyone reading this{" "}
          <span role="img" aria-label="hugging face">
            🤗
          </span>
          . As the header implies, my name is Viktor and I'm a Front-end
          developer (and sometimes full-stack) from Ukraine.
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
          Nowadays I'm working{" "}
          <span role="img" aria-label="hummer">
            🔨
          </span>
          at a private company as a developer
          <span role="img" aria-label="fire">
            &#128293;
          </span>
          , where I use technologies such as ES6+, Vue.js, Vuetify, Cordova.js,
          Firebase, and much more...
        </p>
      </div>
    );
  }
}

export default About;
