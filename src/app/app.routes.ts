import { Routes } from '@angular/router';
import { DhashboardComponent } from './page/dhashboard/dhashboard.component';
import { AddEmployeeComponent } from './page/dhashboard/add-employee/add-employee.component';
import { ManageComponent } from './page/dhashboard/manage/manage.component';

export const routes: Routes = [
    {
        path: "",
        component:DhashboardComponent,
        children:[
          {
            path:"",
            component:AddEmployeeComponent
          }
          ,
          {
            path:"add",
            component:AddEmployeeComponent
          },{
            path:"manage",
            component:ManageComponent
          }
        ]
    },{
      path:"",
      component:DhashboardComponent
    }


];
