import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpAuthModule } from './emp-auth/emp-auth.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InterceptorService } from './services/interceptor.service';
import { EmpListModule } from './emp-list/emp-list.module';

import { MatCardModule } from '@angular/material/card'
import { MatButtonModule } from '@angular/material/button'
import { MatInputModule } from '@angular/material/input'
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { reducers } from './emp-list/reducers';
import { EffectsModule } from '@ngrx/effects';
import { EmployeeEffects } from './emp-list/effects/emplist.effect';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EmpAuthModule,
    EmpListModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([EmployeeEffects]),
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatToolbarModule,
    MatTableModule,
    BrowserAnimationsModule,
    // RouterModule.forChild(routes),
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass:InterceptorService,
      multi: true
    }
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
