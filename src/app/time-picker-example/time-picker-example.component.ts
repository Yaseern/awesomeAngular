import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-time-picker-example',
  templateUrl: './time-picker-example.component.html',
  styleUrls: ['./time-picker-example.component.scss']
})
export class TimePickerExampleComponent implements OnInit {
  title = 'Angular Time Picker';
  constructor() { }

  timeModel1 : string;
  timeModel2 : string;
  timeModel3 : string;

  ngOnInit() {
  }

}
