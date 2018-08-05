import SkillIcons from "../enums/SkillIcons";
import SkillSubtreeNode from "./SkillSubtreeNode";
import Skill from "./skill";

class BasicDom extends SkillSubtreeNode {
  icon = SkillIcons.BasicDOM;
  title = "BASIC DOM";
  recommend: Array<Skill> = [];

  optional: Array<Skill> = [{ name: "jQuery", learned: false }];
}

export default BasicDom;
