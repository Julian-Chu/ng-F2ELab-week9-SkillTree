import SkillIcons from "../enums/SkillIcons";
import SkillSubtreeNode from "./SkillSubtreeNode";
import Skill from "./skill";

class JavascriptFramework extends SkillSubtreeNode {
  icon = SkillIcons.JavascriptFramework;
  title = "JAVASCRIPT FRAMEWORK";
  recommend: Array<Skill> = [
    { name: "Vue.js", learned: false },
    { name: "Angular", learned: false },
    { name: "React.js", learned: false }
  ];

  optional: Array<Skill> = [];
}

export default JavascriptFramework;
