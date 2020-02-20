import { Component, OnInit } from '@angular/core';
import { Constants } from 'src/app/constants';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {
  myFacebookLink = Constants.socialMediaLinks.myFacebook;
  myGithubLink = Constants.socialMediaLinks.myGithub;
  myLinkedinLink = Constants.socialMediaLinks.myLinkedin;
  myCVLink = Constants.socialMediaLinks.myCV;
  myPhoto = 'assets/images/photo_200.jpg';

  constructor() { }

  ngOnInit() {
  }

}
