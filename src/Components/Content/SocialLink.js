import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faGithub, faLinkedin, faTelegram } from '@fortawesome/free-brands-svg-icons'
import data from "./../../data";

class SocialLink extends Component {
  state = {
    socialLinks: data.socialLinks
  };
  render() {
    return (
      <div className="Social-link">
      
      {/* (this.socialLinks.map(item => {
        return (<a className="App-Link contact" target="_blanck" key={item} href={item.url}>
          <FontAwesomeIcon  icon={item.icon} />;
        <a/>)
      })) */}
     
      </div>
    );
  }
}

{/* export default function EmptyCart() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-10 mx-auto text-center text-title">
          <h1>Your cart is currently empty</h1>
        </div>
      </div>
    </div>
  );
} */}

export default SocialLink;