import SkillIcons from "../enums/SkillIcons";
import SkillSubtreeNode from "./SkillSubtreeNode";
import Skill from "./skill";

class JavascriptPreprocessors extends SkillSubtreeNode {
  icon = SkillIcons.JavascriptPreprocessors;
  title = "JAVASCRIPT PREPROCESSORS";
  recommend: Array<Skill> = [];

  optional: Array<Skill> = [
    { name: "TypeScript", learned: false },
    { name: "Babel", learned: false },
    { name: "CoffeeScript", learned: false }
  ];
}

export default JavascriptPreprocessors;
