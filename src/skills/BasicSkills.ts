class BasicSkills implements SkillSubtreeNode {
  imgPath = "";
  title = "BASIC SKILLS";
  recommand: Array<Skill> = [
    { name: "Learn HTML", learned: false },
    { name: "Basic of CSS", learned: false },
    { name: "Basics of Javascript", learned: false }
  ];

  optional: Array<Skill> = [];
}

export default BasicSkills;
