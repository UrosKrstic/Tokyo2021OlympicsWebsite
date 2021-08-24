import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddsportComponent } from './addsport/addsport.component';
import { AthletesComponent } from './athletes/athletes.component';
import { AuthenticationGuard } from './authentication.guard';
import { CountriesComponent } from './countries/countries.component';
import { LoginComponent } from './login/login.component';
import { MedalsComponent } from './medals/medals.component';
import { RegisterAthletesComponent } from './register-athletes/register-athletes.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent, data: { plausableTypes: ['guest']}, canActivate: [AuthenticationGuard]},
  {path: 'register', component: RegisterComponent, data: { plausableTypes:['guest']}, canActivate: [AuthenticationGuard]},
  {path: 'countries', component: CountriesComponent, data: { plausableTypes: ['guest', 'organizer', 'delegate', 'leader']}, canActivate: [AuthenticationGuard]},
  {path: 'medals', component: MedalsComponent, data: { plausableTypes: ['guest', 'organizer', 'delegate', 'leader']}, canActivate: [AuthenticationGuard]},
  {path: 'athletes', component: AthletesComponent, data: { plausableTypes: ['guest', 'organizer', 'delegate', 'leader']}, canActivate: [AuthenticationGuard]},
  {path: 'addsports', component: AddsportComponent, data: { plausableTypes: ['organizer']}, canActivate: [AuthenticationGuard]},
  {path: 'registerathletes', component: RegisterAthletesComponent, data: { plausableTypes: ['leader']}, canActivate: [AuthenticationGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
