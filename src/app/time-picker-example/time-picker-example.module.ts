import { NgModule } from '@angular/core';
import { TimePickerExampleComponent } from './time-picker-example.component';
import { RouterModule } from '@angular/router';
import { TimePickerExampleRoute } from './time-picker-example.routing.module';
import { NgTimePickerModule } from 'ngy-time-picker'
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [TimePickerExampleComponent],
  imports: [
    RouterModule.forChild(TimePickerExampleRoute),
    NgTimePickerModule,
    FormsModule
  ]
})
export class TimePickerExampleModule { }
