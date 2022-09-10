import React, { Component } from 'react';

class Academics extends Component{
  render(){
    return(
      <div className="App-Content" id="academics">
      <h1>Academic Formation</h1>
      <p>I started studying computer science on 2013 at <a href="#" className="App-Link academy">ITI</a>, which is an institute from <a href="#" className="App-Link academy">UTU</a> where I finish High Shcool with a degree of IT technician.</p>
      <p>There I learn how to code, how to manage data bases, how to repear computers and infra equipment, and also how to install infra equipment</p>
      <p>Currently I'm still at UTU but nowadays I'm finishing a tertiary degree in Software and Networking, where I'm developing my graduation proyect.</p>
      <p>And last year I did two courses, one of React JS and React Native on <a href="#" className="App-Link academy">Hack Academy</a>, a well known IT academy from Uruguay, and the other one of Videogame Design with Unreal Engine 4 at <a href="https://www.senpaiacademy.com/" className="App-Link academy">Senpai Academy</a>.</p>
      </div>
    );
  }
}

export default Academics;