import SkillIcons from "../enums/SkillIcons";
import SkillSubtreeNode from "./SkillSubtreeNode";
import Skill from "./skill";

class CssPreprocessors extends SkillSubtreeNode {
  icon = SkillIcons.CssPreprocessors;
  title = "CSS PREPROCESSORS";
  recommend: Array<Skill> = [
    { name: "Sass", learned: false },
    { name: "PostCSS", learned: false }
  ];

  optional: Array<Skill> = [
    { name: "Less", learned: false },
    { name: "Stylus", learned: false }
  ];
}

export default CssPreprocessors;
