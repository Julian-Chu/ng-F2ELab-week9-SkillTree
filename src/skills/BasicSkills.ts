import { Optional } from "../../node_modules/@angular/core";

class BasicSkills {
  imgPath: string = "";
  title: string = "BASIC SKILLS";
  recommand: Array<Skill> = [
    { name: "Learn HTML", learned: false },
    { name: "Basic of CSS", learned: false },
    { name: "Basics of Javascript", learned: false }
  ];

  Optional: Array<Skill> = [];
}
