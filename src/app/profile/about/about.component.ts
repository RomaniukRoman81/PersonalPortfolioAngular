import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }

  aboutMe = 'Working in Cloud9 on the web sites for English, USA and Australian universities ';

  ngOnInit() {
  }

}
