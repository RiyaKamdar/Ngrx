import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import { EmployeeComponent } from './emp-list/components';
import { AuthguardGuard } from './guards/authguard.guard';
import { HeaderComponent } from './emp-list/components/header/header.component';

const routes: Routes = [
  // {
  //   path: '',
  //   component: AppComponent
  // },
  {
    path:'',
    loadChildren: () => import('./emp-auth/emp-auth.module').then((m) => m.EmpAuthModule),
    
  },
  {
    path: 'header',
    component: HeaderComponent,
    canActivate: [AuthguardGuard]
  },
  {
    path:'emplist',
    loadChildren: () => import('./emp-list/emp-list.module').then((m) => m.EmpListModule),
    canActivate: [AuthguardGuard]
  }
  
  // {
  //   path: 'emplist',
  //   component: EmployeeComponent
  // }
  // {
  //   path:'emplist',
  //   loadChildren: () => import('./emp-list/emp-list.module').then((m) => m.EmpListModule),
  //   canActivate: [AuthguardGuard]
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
