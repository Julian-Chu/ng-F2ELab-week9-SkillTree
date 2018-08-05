import SkillIcons from "../enums/SkillIcons";
import SkillSubtreeNode from "./SkillSubtreeNode";
import Skill from "./skill";

class PackageManagers extends SkillSubtreeNode {
  icon = SkillIcons.PackageManagers;
  title = "CSS FRAMEWORK";
  recommend: Array<Skill> = [
    { name: "NPM", learned: false },
    { name: "YARN", learned: false }
  ];

  optional: Array<Skill> = [{ name: "Bower", learned: false }];
}

export default PackageManagers;
