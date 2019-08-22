import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { faPlay, faStopwatch, faTrash } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'action-buttons',
  templateUrl: './action-buttons.component.html',
  styleUrls: ['./action-buttons.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ActionButtonsComponent implements OnInit {
  private faPlay = faPlay;
  private faStopwatch = faStopwatch;
  private faTrash = faTrash;
  constructor() { }

  ngOnInit() {
  }

}
