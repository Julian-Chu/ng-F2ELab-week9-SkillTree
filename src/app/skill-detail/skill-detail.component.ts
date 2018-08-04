import { Component, OnInit, Input } from "@angular/core";
import SkillSubtreeNode from "../../skills/SkillSubtreeNode";

@Component({
  selector: "app-skill-detail",
  templateUrl: "./skill-detail.component.html",
  styleUrls: ["./skill-detail.component.css"]
})
export class SkillDetailComponent implements OnInit {
  @Input() currentSkill: SkillSubtreeNode;
  constructor() {}

  ngOnInit() {}
}
