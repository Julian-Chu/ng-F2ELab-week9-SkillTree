import SkillIcons from "../enums/SkillIcons";
import SkillSubtreeNode from "./SkillSubtreeNode";
import Skill from "./skill";

class CssArchitecture extends SkillSubtreeNode {
  icon = SkillIcons.CssPreprocessors;
  title = "CSS ARCHITECTURE";
  recommend: Array<Skill> = [{ name: "OOCSS", learned: false }];

  optional: Array<Skill> = [
    { name: "SMACSS", learned: false },
    { name: "BEM", learned: false }
  ];
}

export default CssArchitecture;
