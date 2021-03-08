import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import data from "./../../data";

const SocialLinkElem = () => {
  const { socialLinks } = data
  return socialLinks.map((item, i) => {
    return (
      <a className="App-Link contact" target="_blanck" key={i} href={item.link}>
        <FontAwesomeIcon icon={['fab', item.icon]} />
      </a>
    );
  });
}

export default SocialLinkElem;