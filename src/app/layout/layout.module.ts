import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LayoutRoute } from './layout-routing.module';
import { LayoutComponent } from './layout.component';



@NgModule({
  declarations: [LayoutComponent],
  imports: [
    RouterModule.forChild(LayoutRoute)
  ],
  bootstrap : [LayoutComponent]
})
export class LayoutModule { }
