import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthguardGuard } from '../guards/authguard.guard';
import { EmployeeComponent } from './components';
import { EmployeeContainerComponent } from './container';

export const routes: Routes = [
  // {
  //   path:'',
  //   redirectTo : 'test',
  //   pathMatch:'full'
  // },
  {
    path: '',
    component: EmployeeContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpListRoutingModule { }
