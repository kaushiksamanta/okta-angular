import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

import {
  OKTA_CONFIG,
  OktaAuthModule,
} from '@okta/okta-angular';
import { LoginComponent } from './components/login/login.component';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    OktaAuthModule,
    AppRoutingModule,
  ],
  providers: [
    { provide: OKTA_CONFIG, useValue: environment.oktaConfig }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
