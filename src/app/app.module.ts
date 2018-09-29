import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginModuleModule } from './login-module/login-module.module';
import { MainModuleModule } from './main-module/main-module.module';
import { LoginComponent } from './login-module/login.component';
import { MainComponent } from './main-module/main.component';
import { FormsModule } from '@angular/forms';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { environment } from './envireonment';
import { FileUploadComponent } from 'src/app/main-module/file-upload/file-upload.component';


export const firebaseConfig = {
  apiKey: 'AIzaSyAfkp3Y8czYgigunnCvZw5ZspkKPdo1LNE',
  authDomain: 'ambi-angular-firebase.firebaseapp.com',
  databaseURL: 'https://ambi-angular-firebase.firebaseio.com',
  projectId: 'ambi-angular-firebase',
  storageBucket: 'ambi-angular-firebase.appspot.com',
  messagingSenderId: '545748881981'
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    FileUploadComponent
  ],
  imports: [
    BrowserModule,
    LoginModuleModule,
    MainModuleModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [
    AngularFireAuth,
    AngularFireDatabase],
  bootstrap: [AppComponent]
})
export class AppModule { }
