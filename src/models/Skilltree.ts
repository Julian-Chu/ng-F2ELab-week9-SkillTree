import SkillSubtreeNode from "./SkillSubtreeNode";

class SkillTree {
  basics: Array<SkillSubtreeNode>;
  css: Array<SkillSubtreeNode>;
  javascript: Array<SkillSubtreeNode>;
  managers: Array<SkillSubtreeNode>;

  currentRank: number;
}

export default SkillTree;
