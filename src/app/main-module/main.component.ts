import { Component, OnInit } from '@angular/core';
import { JsonService } from './json.service';
import { FireBaseService } from './fire-base.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['../../assets/main.css'],
})

export class MainComponent implements OnInit {


constructor(protected fb: FireBaseService) {
 }
  ngOnInit() {
  }

}
