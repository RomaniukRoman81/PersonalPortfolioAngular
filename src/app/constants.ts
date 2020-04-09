import { Injectable } from '@angular/core';

@Injectable()
export class Constants {
    static socialMediaLinks: ISocialMediaLinks = {
        myFacebook: 'https://www.facebook.com/profile.php?id=100004749600054',
        myGithub: 'https://github.com/RomaniukRoman',
        myLinkedin: 'https://www.linkedin.com/in/roman-romaniuk-732685156/',
        myCV: 'https://drive.google.com/open?id=1B9O0p43edhKtPkbdpZevtzjIhb5Bcra4H8NRr724sI0'
    };

    apiRoutes: IApiRoutes = {
        skillsListUrl: 'http://localhost:4200/assets/skillsData.json',
        educationalsListUrl: 'http://localhost:4200/assets/educationalsData.json',
        exprienceListUrl: 'http://localhost:4200/assets/exprienceData.json'
    };
}
export interface ISocialMediaLinks {
    myFacebook: string;
    myGithub: string;
    myLinkedin: string;
    myCV: string;
}
export interface IApiRoutes {
    skillsListUrl: string;
    educationalsListUrl: string;
    exprienceListUrl: string;
}
