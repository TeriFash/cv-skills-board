import { faTelegram, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"; // faFacebook
import { skills } from "assets/data";


const socialNetworkLinks = {
  GitHub: 'https://github.com/TeriFash',
  Telegram: 'https://telegram.im/@TeriFash',
  Linkedin: 'https://linkedin.com/in/viktor-gura/'
  // Facebook: 'https://www.facebook.com/profile.php?id=100015717390714'
};

const socialNetworkIcons = { 
  GitHub: faGithub, 
  Telegram: faTelegram, 
  Linkedin: faLinkedin 
  // Facebook: faFacebook
};

export const socialLinkParser = () => {
  const list = Object.keys(socialNetworkLinks);

  return list.map(key => ({
    link: socialNetworkLinks[key],
    title: key,
    text: key.toLowerCase(),
    icon: socialNetworkIcons[key]
  }));
};

const sortSkills = value => {
  const types = Object.keys(value);
  let list = [];

  types.forEach(item => {
    switch (item) {
      case 'hard':
        list.push({
          title: 'Technology',
          data: skills[item]
        });
        break;
      case 'soft':
        list.push({
          title: 'Tools',
          data: skills[item]
        });
        break;
      case 'management':
        list.push({
          title: 'Managment',
          data: skills[item]
        });
        break;
      default:
        list.push({
          title: 'Other',
          data: skills[item]
        });
        break;
    }
  });

  return list;
};

export const skillsList = sortSkills(skills);
