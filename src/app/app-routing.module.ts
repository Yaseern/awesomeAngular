import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TimePickerExampleComponent } from './time-picker-example/time-picker-example.component';


const routes: Routes = [
  {
    path: "",
    loadChildren: () => import('./layout/layout.module').then(m => m.LayoutModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
