import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimePickerExampleComponent } from './time-picker-example.component';
import { RouterModule } from '@angular/router';
import { TimePickerExampleRoute } from './time-picker-example.routing.module';
import { NgTimePickerModule } from 'ngy-time-picker'



@NgModule({
  declarations: [TimePickerExampleComponent],
  imports: [
    RouterModule.forChild(TimePickerExampleRoute),
    NgTimePickerModule
  ]
})
export class TimePickerExampleModule { }
