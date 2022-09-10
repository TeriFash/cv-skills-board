import React, { Component } from "react";
import { Events, animateScroll as scroller, scrollSpy } from 'react-scroll'

import Tech from "./content/Tech";
import About from "./content/About";
import MainHeader from "./content/MainHeader";

class Main extends Component {
  constructor(props) {
    super(props);
    this.scrollToTop = this.scrollToTop.bind(this);
  }

  componentDidMount() {
    // Events.scrollEvent.register("begin", function() {
    //   console.log("begin ------", );
    // });

    // Events.scrollEvent.register("end", function(e) {
    //   console.log("end -------------", );
    //   this.scrollToTop()
      
    // });

    

    scrollSpy.update();
  };
  scrollToTop() {
    // eslint-disable-next-line no-restricted-globals
    scroller.scrollToTop();
  };
  scrollTo(offset) {
    scroller.scrollTo("main", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
      offset: offset
    });
  };
  scrollToWithContainer() {
    let goToContainer = new Promise((resolve, reject) => {
      Events.scrollEvent.register("end", () => {
        resolve();
        Events.scrollEvent.remove("end");
      });

      scroller.scrollTo('main', {
        duration: 2000,
        delay: 0,
        smooth: "easeInOutQuart",
        offset: -200
      });
    });

    goToContainer.then(() =>
      scroller.scrollTo(500, {
        duration: 2000,
        delay: 0,
        smooth: "easeInOutQuart",
        containerId: "tech",
      })
    );
  };

  componentWillUnmount() {
    // Events.scrollEvent.remove("begin");
    Events.scrollEvent.remove("end");
  }
  render() {
    this.scrollToWithContainer();
    return (
      <div className="App-main" >
        
          <MainHeader id='main' />
          <Tech id='tech' />
          <About id="about" />
        
      </div>
    );
  }
}

export default Main;
