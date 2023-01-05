import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmpAuthRoutingModule } from './emp-auth-routing.module';
import { LoginComponent } from './login/login.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card'
import { MatButtonModule } from '@angular/material/button'
import { MatInputModule } from '@angular/material/input'
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    EmpAuthRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatToolbarModule,
    MatTableModule
  ],
  exports: [
    LoginComponent
  ]
})
export class EmpAuthModule { }
