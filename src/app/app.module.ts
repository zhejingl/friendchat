import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {AuthGuardService as AuthGuard} from './services/auth-guard.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { LoginLayoutComponent } from './components/login-layout/login-layout.component';
import { HomeLayoutComponent } from './components/home-layout/home-layout.component';
import { Routes, RouterModule } from '@angular/router';
import { FlexLayoutModule} from '@angular/flex-layout'
import { HttpClientModule, HttpClient } from '@angular/common/http';
import {MaterialModule} from './core/material.module';
import { LandingComponent } from './components/landing/landing.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'login', data: { title: 'Second Component'}, pathMatch: 'full'},
  {
    path: 'login', component: LoginLayoutComponent, data: { title: 'Second Component'},
    children: [
      { path: '', component: LoginComponent}
    ]
  },
  {
    path: 'main', component: HomeLayoutComponent,
    
    canActivate: [AuthGuard]
  },
  
];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginLayoutComponent,
    HomeLayoutComponent,
    LandingComponent,
    NavigationComponent,
    
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes
    ),
    BrowserAnimationsModule
  ],
  exports: [RouterModule],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
