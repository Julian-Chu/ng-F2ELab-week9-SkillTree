import SkillIcons from "../enums/SkillIcons";
import SkillSubtreeNode from "./SkillSubtreeNode";
import Skill from "./skill";

class CssFramework extends SkillSubtreeNode {
  icon = SkillIcons.CssFramework;
  title = "CSS FRAMEWORK";
  recommend: Array<Skill> = [{ name: "Bootstrap", learned: false }];

  optional: Array<Skill> = [
    { name: "UIKit", learned: false },
    { name: "Foundation", learned: false },
    { name: "Semantic UI", learned: false }
  ];
}

export default CssFramework;
