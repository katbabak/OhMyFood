import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { AuthoristaionComponent } from './components/authorisation/authoristaion/authoristaion.component';
import { LoginComponent } from './components/authorisation/login/login.component';
import { SignupComponent } from './components/authorisation/signup/signup.component';
import { RabbitComponent } from './components/rabbit/rabbit.component';
import { UserService } from './services/user-service/user.service';
import { ProductService } from './services/product-service/product.service';
import {LoginguardGuard} from './loginguard.guard';

const appRoutes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'main',
    canActivate: [LoginguardGuard],
    component: MainComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    AuthoristaionComponent,
    LoginComponent,
    SignupComponent,
    RabbitComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    UserService,
    ProductService,
    LoginguardGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
