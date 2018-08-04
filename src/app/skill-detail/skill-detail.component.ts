import { Component, OnInit, Input } from "@angular/core";
import SkillSubtreeNode from "../../skills/SkillSubtreeNode";
import Skill from "../../skills/skill";

@Component({
  selector: "app-skill-detail",
  templateUrl: "./skill-detail.component.html",
  styleUrls: ["./skill-detail.component.css"]
})
export class SkillDetailComponent implements OnInit {
  @Input() currentSkill: SkillSubtreeNode;
  constructor() {}

  ngOnInit() {}
  ChangeLearnedRecommend(skillName: string, learned: boolean) {
    const renewedTarget = new Skill(skillName, !learned);
    this.currentSkill.recommend = this.currentSkill.recommend.map(
      skill => (skill.name === skillName ? renewedTarget : skill)
    );
  }
  ChangeLearnedOptional(skillName: string, learned: boolean) {
    const renewedTarget = new Skill(skillName, !learned);
    this.currentSkill.recommend = this.currentSkill.optional.map(
      skill => (skill.name === skillName ? renewedTarget : skill)
    );
  }
}
