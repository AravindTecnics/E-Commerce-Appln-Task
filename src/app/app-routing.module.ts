import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { LoginComponent } from './login/login.component';
import { PropertyCardComponent } from './property-card/property-card.component';
import { SignFormComponent } from './sign-form/sign-form.component';

const routes: Routes = [
  {path:'' , component:LoginComponent},
  {path:'login' , component:LoginComponent},
  {path:'sign-form' , component:SignFormComponent},
  {path:'DashBoard', component:DashBoardComponent},
  {path: 'aravind' , component:PropertyCardComponent}
  // {path:'dashboard' , compone}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
