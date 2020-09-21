import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { Routes, RouterModule } from '@angular/router';

const dashboardRoute: Routes = [
  {
    path: "",
    component: DashboardComponent
  }
];

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    RouterModule.forChild(dashboardRoute),
  ],
  bootstrap : [DashboardComponent]
})
export class DashboardModule { }
