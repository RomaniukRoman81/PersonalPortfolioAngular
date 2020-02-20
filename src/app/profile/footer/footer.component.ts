import { Component, OnInit } from '@angular/core';
import { Constants } from 'src/app/constants';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  yearNow = new Date().getFullYear();
  myFacebookLink = Constants.socialMediaLinks.myFacebook;
  myGithubLink = Constants.socialMediaLinks.myGithub;

  constructor() { }

  ngOnInit() {
  }

}
