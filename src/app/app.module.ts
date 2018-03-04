import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { AuthoristaionComponent } from './components/authorisation/authoristaion/authoristaion.component';
import { LoginComponent } from './components/authorisation/login/login.component';
import { SignupComponent } from './components/authorisation/signup/signup.component';
import { RabbitComponent } from './components/rabbit/rabbit.component';
import { UserService } from './services/user-service/user.service';
import { ProductService } from './services/product-service/product.service';


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
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  providers: [
    UserService,
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
