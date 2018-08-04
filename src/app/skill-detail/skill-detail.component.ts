import { Component, OnInit, Input } from "@angular/core";

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
