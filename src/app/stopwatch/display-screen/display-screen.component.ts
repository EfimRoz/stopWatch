import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'display-screen',
  templateUrl: './display-screen.component.html',
  styleUrls: ['./display-screen.component.css']
})
export class DisplayScreenComponent implements OnInit {
  private miliseconds: number;
  private seconds: number;
  private minutes: number;
  constructor() {
    this.initVariables();
  }

  ngOnInit() {
  }

  private initVariables(): void {
    this.miliseconds = 1;
    this.seconds = 1;
    this.minutes = 1;
  }
}
