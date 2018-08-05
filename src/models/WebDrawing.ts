import SkillIcons from "../enums/SkillIcons";
import SkillSubtreeNode from "./SkillSubtreeNode";
import Skill from "./skill";

class WebDrawing extends SkillSubtreeNode {
  icon = SkillIcons.WebDrawing;
  title = "WEB DRAWING";
  recommend: Array<Skill> = [];

  optional: Array<Skill> = [
    { name: "SVG", learned: false },
    { name: "Canvas", learned: false },
    { name: "D3.js", learned: false }
  ];
}

export default WebDrawing;
