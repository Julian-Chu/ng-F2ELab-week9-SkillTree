import { Component } from "@angular/core";
import BasicSkills from "../skills/BasicSkills";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "app";
  basicSkills = new BasicSkills();
  currentSkill: SkillSubtreeNode;

  /**
   *
   */
  constructor() {
    this.currentSkill = this.basicSkills;
  }
}
