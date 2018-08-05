import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import SkillSubtreeNode from "../../models/SkillSubtreeNode";
import Skill from "../../models/skill";

@Component({
  selector: "app-skill-detail",
  templateUrl: "./skill-detail.component.html",
  styleUrls: ["./skill-detail.component.css"]
})
export class SkillDetailComponent implements OnInit {
  @Input() currentSkill: SkillSubtreeNode;
  @Output() checkCompleted: EventEmitter<any> = new EventEmitter();
  constructor() {}

  ngOnInit() {}
  ChangeLearnedRecommend(skillName: string, learned: boolean) {
    const renewedTarget = new Skill(skillName, !learned);
    this.currentSkill.recommend = this.currentSkill.recommend.map(
      skill => (skill.name === skillName ? renewedTarget : skill)
    );
    this.checkCompleted.emit(null);
  }
  ChangeLearnedOptional(skillName: string, learned: boolean) {
    const renewedTarget = new Skill(skillName, !learned);
    this.currentSkill.optional = this.currentSkill.optional.map(
      skill => (skill.name === skillName ? renewedTarget : skill)
    );
  }
}
