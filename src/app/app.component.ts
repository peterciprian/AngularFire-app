import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['../assets/main.css']
})
export class AppComponent {
  title = 'ambiFirebaseApp';
  buttonContent: string = 'Login';
  loggedIn = false;
  toggleStuff() {
    this.loggedIn = !this.loggedIn;
    if (this.buttonContent === 'Login') {
      this.buttonContent = 'Logout'
    } else if (this.buttonContent === 'Logout') {
      this.buttonContent = 'Login'
    }

  }
}
