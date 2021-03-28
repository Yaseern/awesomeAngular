import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { YearPickerExampleRoute } from './year-picker-example-routing.module';
import { YearPickerExampleComponent } from './year-picker-example.component';
import { NgYasYearPickerModule } from 'ngy-year-picker';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [YearPickerExampleComponent],
  imports: [    
    CommonModule,
    RouterModule.forChild(YearPickerExampleRoute),
    FormsModule,
    NgYasYearPickerModule
  ]
})
export class YearPickerExampleModule { }
