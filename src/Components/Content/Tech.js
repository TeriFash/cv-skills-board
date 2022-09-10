import React, { Component } from "react";
import { skillsList } from "utils"; 

function TechSkills({data, title}) {
  const skillItem = data.map((skill, i) => {
    return (
      <a key={i} target="_blanck" href={skill.url} className="grid-item main">
        <img src={skill.img} alt={skill.text} title={skill.title} />
      </a>
    );
  });

  return (
    <React.Fragment>
      <h5 className="skills-header">{title}</h5>
      <div className="grid-container">{skillItem}</div>
    </React.Fragment>
  );
}


class Tech extends Component {
  render() {
    const mainText = 'I like to work with technologies such as:';

    return (
      <section className={'App-Content'}>
        <h3>{mainText}</h3>
        <TechSkills {...skillsList[0] } />
        <TechSkills {...skillsList[1] } />
        <TechSkills {...skillsList[2] } />
      </section>
    );
  }
}

export default Tech;
