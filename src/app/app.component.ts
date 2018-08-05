import { Component } from "@angular/core";
import BasicSkills from "../models/BasicSkills";
import SkillSubtreeNode from "../models/SkillSubtreeNode";
import BasicTools from "../models/BasicTools";
import SkillTree from "../models/Skilltree";
import Skill from "../models/skill";
import CssFramework from "../models/CssFramework";
import CssPreprocessors from "../models/CssPreprocessors";
import CssArchitecture from "../models/CssArchitecture";
import CssSkills from "../models/CssSkills";
import CssMastery from "../models/CssMastery";
import WebDrawing from "../models/WebDrawing";
import JavasciptSkills from "../models/javascriptSkills";
import JavascriptFramework from "../models/JavascriptFramework";
import JavascriptPreprocessors from "../models/JavascriptPreprocessors";
import PackageManagers from "../models/PackageManagers";
import TaskRunners from "../models/TaskRunners";
import BuildTools from "../models/BuildTools";

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
    this.skillTree.css = [
      new CssFramework(),
      new CssPreprocessors(),
      new CssArchitecture(),
      new CssSkills(),
      new CssMastery()
    ];
    this.skillTree.javascript = [
      new BasicSkills(),
      new WebDrawing(),
      new JavasciptSkills(),
      new JavascriptFramework(),
      new JavascriptPreprocessors()
    ];
    this.skillTree.managers = [
      new PackageManagers(),
      new TaskRunners(),
      new BuildTools()
    ];

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
    let rank = 0;
    const items = ["basics", "css", "javascript", "managers"];
    items.forEach(key => {
      console.log(this.skillTree[key]);
      const recommended = this.skillTree[key]
        .map(obj => obj.recommend)
        .reduce((a, b) => [...a, ...b]);

      if (
        recommended.filter(skill => skill.learned === true).length ===
        recommended.length
      ) {
        rank++;
      }
    });
    this.skillTree.currentRank = rank;
    console.log(rank);
  }
}
