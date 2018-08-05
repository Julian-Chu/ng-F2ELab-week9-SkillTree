import SkillIcons from "../enums/SkillIcons";
import Skill from "./skill";

abstract class SkillSubtreeNode {
  abstract icon: SkillIcons;
  abstract title: string;
  abstract recommend: Array<Skill>;

  abstract optional: Array<Skill>;
  get learnedRecommendedSkills(): number {
    return this.recommend.filter(skill => skill.learned === true).length;
  }

  get learnedOptionalSkills(): number {
    return this.optional.filter(skill => skill.learned === true).length;
  }
}

export default SkillSubtreeNode;
