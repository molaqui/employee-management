import { Routes } from '@angular/router';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeFormComponent } from './components/employee-form/employee-form.component';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';
import { EmployeeUpdateComponent } from './components/employee-update/employee-update.component';

export const routes: Routes = [
  { path: '', component: EmployeeListComponent },
  { path: 'add', component: EmployeeFormComponent },
  { path: 'details/:id', component: EmployeeDetailsComponent },
  { path: 'edit/:id', component: EmployeeUpdateComponent },
];
