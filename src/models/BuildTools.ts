import SkillIcons from "../enums/SkillIcons";
import SkillSubtreeNode from "./SkillSubtreeNode";
import Skill from "./skill";

class BuildTools extends SkillSubtreeNode {
  icon = SkillIcons.BuildTools;
  title = "BUILD TOOLS";
  recommend: Array<Skill> = [{ name: "Webpack", learned: false }];

  optional: Array<Skill> = [{ name: "Parcel", learned: false }];
}

export default BuildTools;
