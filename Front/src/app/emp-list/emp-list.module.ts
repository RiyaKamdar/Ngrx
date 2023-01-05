import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmpListRoutingModule } from './emp-list-routing.module';
import { EmployeeComponent } from './components/employee/employee.component';
import { EmployeeContainerComponent } from './container/employeecontainer.component';

import { HeaderComponent } from './components/header/header.component';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [
    EmployeeComponent,
    HeaderComponent,
    EmployeeContainerComponent
    
  ],
  imports: [
    CommonModule,
    EmpListRoutingModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule
  ],
  exports: [
    EmployeeComponent,
    EmployeeContainerComponent,
    HeaderComponent,
  ]
})
export class EmpListModule { }
