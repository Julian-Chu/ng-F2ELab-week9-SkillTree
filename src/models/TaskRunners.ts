import SkillIcons from "../enums/SkillIcons";
import SkillSubtreeNode from "./SkillSubtreeNode";
import Skill from "./skill";

class TaskRunners extends SkillSubtreeNode {
  icon = SkillIcons.TaskRunners;
  title = "TASK RUNNERS";
  recommend: Array<Skill> = [
    { name: "npm scripts", learned: false },
    { name: "gulp", learned: false }
  ];

  optional: Array<Skill> = [{ name: "grunt", learned: false }];
}

export default TaskRunners;
