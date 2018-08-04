import SkillIcons from "../enums/SkillIcons";
import SkillSubtreeNode from "./SkillSubtreeNode";
class BasicSkills implements SkillSubtreeNode {
  icon = SkillIcons.BasicSkills;
  title = "BASIC SKILLS";
  recommend: Array<Skill> = [
    { name: "Learn HTML", learned: false },
    { name: "Basic of CSS", learned: false },
    { name: "Basics of Javascript", learned: false }
  ];

  optional: Array<Skill> = [];
  get learnedRecommendedSkills(): number {
    return this.recommend.filter(skill => skill.learned === true).length;
  }

  get learnedOptionalSkills(): number {
    return this.optional.filter(skill => skill.learned === true).length;
  }
}

export default BasicSkills;
