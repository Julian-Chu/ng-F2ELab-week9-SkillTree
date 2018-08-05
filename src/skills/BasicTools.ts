import SkillSubtreeNode from "./SkillSubtreeNode";
import SkillIcons from "../enums/SkillIcons";
import Skill from "./skill";

class BasicTools extends SkillSubtreeNode {
  icon = SkillIcons.BasicTools;
  title = "BASIC TOOLS";
  recommend: Array<Skill> = [
    new Skill("Git - Version Control"),
    new Skill("Basic Terminal Usage"),
    new Skill("Text Editor"),
    new Skill("A Heart of Researching")
  ];
  optional = [];
}

export default BasicTools;
