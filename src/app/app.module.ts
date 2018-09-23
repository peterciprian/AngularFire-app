import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginModuleModule } from './login-module/login-module.module';
import { MainModuleModule } from './main-module/main-module.module';
import { LoginComponent } from './login-module/login.component';
import { MainComponent } from './main-module/main.component';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestore } from '@angular/fire/firestore';


export const firebaseConfig = {
  apiKey: "AIzaSyAfkp3Y8czYgigunnCvZw5ZspkKPdo1LNE",
  authDomain: "ambi-angular-firebase.firebaseapp.com",
  databaseURL: "https://ambi-angular-firebase.firebaseio.com",
  projectId: "ambi-angular-firebase",
  storageBucket: "ambi-angular-firebase.appspot.com",
  messagingSenderId: "545748881981"
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    LoginModuleModule,
    MainModuleModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
