import SkillIcons from "../enums/SkillIcons";
import SkillSubtreeNode from "./SkillSubtreeNode";
import Skill from "./skill";

class CssSkills extends SkillSubtreeNode {
  icon = SkillIcons.CssSkills;
  title = "CSS SKILLS";
  recommend: Array<Skill> = [
    { name: "Responsive", learned: false },
    { name: "Flexbox", learned: false }
  ];

  optional: Array<Skill> = [];
}

export default CssSkills;
