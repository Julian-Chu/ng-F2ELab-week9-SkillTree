import { Component } from "@angular/core";
import BasicSkills from "../skills/BasicSkills";
import SkillSubtreeNode from "../skills/SkillSubtreeNode";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "app";
  basics = [new BasicSkills()];
  basicSkills = new BasicSkills();
  currentSkill: SkillSubtreeNode;

  /**
   *
   */
  constructor() {
    this.currentSkill = this.basics[0];
  }
}
