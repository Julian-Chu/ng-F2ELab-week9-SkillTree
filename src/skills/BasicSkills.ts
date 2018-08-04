import SkillIcons from "../enums/SkillIcons";
import SkillSubtreeNode from "./SkillSubtreeNode";
class BasicSkills implements SkillSubtreeNode {
  icon = SkillIcons.BasicSkills;
  title = "BASIC SKILLS";
  recommend: Array<Skill> = [
    { name: "Learn HTML", learned: false },
    { name: "Basic of CSS", learned: false },
    { name: "Basics of Javascript", learned: false }
  ];

  optional: Array<Skill> = [];
}

export default BasicSkills;
