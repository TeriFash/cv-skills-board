import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { socialLinkParser } from "utils";

const SocialLinkElem = () => {
  const socialLinks = socialLinkParser();
  
  return socialLinks.map((item, i) => {
    return (
      <a className="App-Link contact" target="_blanck" key={i} href={item.link}>
        <FontAwesomeIcon icon={item.icon} />
      </a>
    );
  });
}

export default SocialLinkElem;