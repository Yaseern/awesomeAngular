import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-year-picker-example',
  templateUrl: './year-picker-example.component.html',
  styleUrls: ['./year-picker-example.component.scss']
})
export class YearPickerExampleComponent implements OnInit {

  model1;
  model2;
  constructor() { }

  ngOnInit() {
  }

  onChangeDoSomething1() { }

  onChangeDoSomething2() { }
}
