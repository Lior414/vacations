import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import {MatDialogModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatFormFieldModule, MatInputModule, MatRippleModule} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdminMainPageComponent } from './admin-main-page/admin-main-page.component';
import { VacationDialogComponent } from './vacation-dialog/vacation-dialog.component';
import { EditVacationComponent } from './edit-vacation/edit-vacation.component';

const matModules = [
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatRippleModule
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AdminMainPageComponent,
    VacationDialogComponent,
    EditVacationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDialogModule,
    matModules,
    BrowserAnimationsModule
  ],

  exports: [
    matModules
  ],

  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [VacationDialogComponent, EditVacationComponent]

})
export class AppModule { }
