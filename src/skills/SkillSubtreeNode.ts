import SkillIcons from "../enums/SkillIcons";

interface SkillSubtreeNode {
  icon: SkillIcons;
  title: string;
  recommend: Array<Skill>;

  optional: Array<Skill>;
}

export default SkillSubtreeNode;
