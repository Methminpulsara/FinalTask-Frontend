import { Routes } from '@angular/router';
import { DhashboardComponent } from './page/dhashboard/dhashboard.component';
import { AddEmployeeComponent } from './page/dhashboard/add-employee/add-employee.component';

export const routes: Routes = [
    {
        path: "dashboard",
        component:DhashboardComponent,
        children:[
          {
            path:"add",
            component:AddEmployeeComponent
          }
        ]
    }

];
