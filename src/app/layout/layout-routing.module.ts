import { Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';

export const LayoutRoute: Routes = [
  {
    path: "",
    component: LayoutComponent,
    children: [
      {
        path: "",
        loadChildren: () => import('../dashboard/dashboard.module')
          .then(m => m.DashboardModule)
      },
      {
        path: "time",
        loadChildren: () => import('../time-picker-example/time-picker-example.module')
          .then(m => m.TimePickerExampleModule)
      },
    ]
  }
];