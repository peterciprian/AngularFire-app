import { Component, OnInit } from '@angular/core';
import { JsonService } from '../main-module/json.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../../assets/main.css']
})
export class LoginComponent implements OnInit {

  constructor(private jsonService: JsonService) { }

  ngOnInit() {
  }

}
