import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignFormComponent } from './sign-form/sign-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { PropertyCardComponent } from './property-card/property-card.component';
import { PropertyListComponent } from './property-list/property-list.component';
import{HttpClientModule} from '@angular/common/http';
import { HousingService } from './housing.service';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignFormComponent,
    DashBoardComponent,
    PropertyCardComponent,
    PropertyListComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule

  ],
  providers: [HousingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
