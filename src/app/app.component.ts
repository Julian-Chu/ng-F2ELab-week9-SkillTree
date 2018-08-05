import { Component } from "@angular/core";
import BasicSkills from "../models/BasicSkills";
import SkillSubtreeNode from "../models/SkillSubtreeNode";
import BasicTools from "../models/BasicTools";
import SkillTree from "../models/Skilltree";
import Skill from "../models/skill";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "app";
  // basics = [new BasicSkills(), new BasicTools()];
  currentSkill: SkillSubtreeNode = null;
  currentSkillSubtree: Array<SkillSubtreeNode> = [];
  skillTree = new SkillTree();
  /**
   *
   */
  constructor() {
    this.skillTree.basics = [new BasicSkills(), new BasicTools()];
    this.skillTree.css = [];
    this.currentSkillSubtree = this.skillTree.basics;
    this.skillTree.currentRank = 0;
  }

  ChangeCurrentSkill(skill: SkillSubtreeNode) {
    if (this.currentSkill === skill) {
      this.currentSkill = null;
    } else {
      this.currentSkill = skill;
    }
  }

  CheckCompleted() {
    const basicsRecommended = this.skillTree.basics
      .map(obj => obj.recommend)
      .reduce((a, b) => {
        return [...a, ...b];
      });

    this.skillTree.currentRank =
      basicsRecommended.filter(skill => skill.learned === true).length ===
      basicsRecommended.length
        ? 1
        : 0;
  }
}
