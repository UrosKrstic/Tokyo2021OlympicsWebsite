import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatPaginatorModule } from '@angular/material/paginator';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CountriesComponent } from './countries/countries.component';
import { AthletesComponent } from './athletes/athletes.component';
import { MedalsComponent } from './medals/medals.component';
import { RegisterAthletesComponent } from './register-athletes/register-athletes.component';
import { AddsportComponent } from './addsport/addsport.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    CountriesComponent,
    AthletesComponent,
    MedalsComponent,
    RegisterAthletesComponent,
    AddsportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatGridListModule,
    MatMenuModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatSelectModule,
    MatPaginatorModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
