import React, { Component } from "react";
import skills from "../../data";

function TechSkills(props) {
  const skillItem = props.skills.map((skill, i) => {
    // const skillSwitch = (val) => {
    //   switch (val) {
    //     case '1':
    //       return (1)
    //     case '2':
    //       return (2)
    //     default:
    //       return (3)
    //   }
    // }
    return (
      <div key={i} className="grid-item main">
        <img src={skill.img} alt={skill.text} title={skill.title} />
      </div>
    );
  });

  return (
    <React.Fragment>
      <h5 className="skills-header">{props.title}</h5>
      <div className="grid-conteiner">{skillItem}</div>
    </React.Fragment>
  );
}

class Tech extends Component {
  render() {
    return (
      <div className="App-Content" id="tech">
        <h3>I like to work with technologies such as:</h3>
        <TechSkills title="Technology" skills={skills.hard} />
        <TechSkills title="Tools" skills={skills.soft} />
        <TechSkills title="Managment" skills={skills.managment} />
      </div>
    );
  }
}

export default Tech;
