import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTabsModule } from '@angular/material/tabs';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material/table';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';


import { FilestackModule } from '@filestack/angular';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CountriesComponent } from './countries/countries.component';
import { AthletesComponent } from './athletes/athletes.component';
import { MedalsComponent } from './medals/medals.component';
import { RegisterAthletesComponent } from './register-athletes/register-athletes.component';
import { AddsportComponent } from './addsport/addsport.component';
import { CompetitionComponent } from './competition/competition.component';
import { MatStepperModule } from '@angular/material/stepper';
import { UpdatecompComponent } from './updatecomp/updatecomp.component';
import { ResultsCompetitionComponent } from './results-competition/results-competition.component';
import { AddresultsComponent } from './addresults/addresults.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    CountriesComponent,
    AthletesComponent,
    MedalsComponent,
    RegisterAthletesComponent,
    AddsportComponent,
    CompetitionComponent,
    UpdatecompComponent,
    ResultsCompetitionComponent,
    AddresultsComponent
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
    FilestackModule,
    MatTabsModule,
    MatRadioModule,
    MatCheckboxModule,
    MatTableModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
