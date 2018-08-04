import SkillIcons from "../enums/SkillIcons";
import Skill from "./skill";

interface SkillSubtreeNode {
  icon: SkillIcons;
  title: string;
  recommend: Array<Skill>;

  optional: Array<Skill>;
}

export default SkillSubtreeNode;
