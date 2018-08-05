import SkillIcons from "../enums/SkillIcons";
import SkillSubtreeNode from "./SkillSubtreeNode";
import Skill from "./skill";

class JavasciptSkills extends SkillSubtreeNode {
  icon = SkillIcons.JavaScriptSkills;
  title = "JAVASCRIPT SKILLS";
  recommend: Array<Skill> = [{ name: "ES6", learned: false }];

  optional: Array<Skill> = [];
}

export default JavasciptSkills;
