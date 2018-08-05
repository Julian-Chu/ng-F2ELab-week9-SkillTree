
import SkillIcons from "../enums/SkillIcons";
import SkillSubtreeNode from "./SkillSubtreeNode";
import Skill from "./skill";

class CssMastery extends SkillSubtreeNode {
  icon = SkillIcons.CssMastery;
  title = "CSS MASTERY";
  recommend: Array<Skill> = [];

  optional: Array<Skill> = [
    { name: "Grid Layout", learned: false },
    { name: "Animation", learned: false },
    { name: "Transform 2D,3D", learned: false }
  ];
}

export default CssMastery;
