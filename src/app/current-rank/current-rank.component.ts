import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-current-rank",
  templateUrl: "./current-rank.component.html",
  styleUrls: ["./current-rank.component.css"]
})
export class CurrentRankComponent implements OnInit {
  @Input() rank: number;

  data = [
    {
      title: "FRONT-END NOOB",
      message:
        "Welcome to aboard. Your mission is: Collect the resources and learn the skills to upgrade the ship. Good luck, captain! ",
      src: "../assets/icons/img-ship-noob.png"
    },
    {
      title: "FRONT-END BEGINNER",
      message:
        "Congradulations! You become the “Front-end Beginnner”. Keep searching the resources to upgrade to the next level.",
      src: "../assets/icons/img-ship-beginner.png"
    }
  ];
  constructor() {}

  ngOnInit() {}
}
