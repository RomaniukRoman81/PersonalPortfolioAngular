import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { SkillsDataDto } from 'src/app/models/SkillsDataDto';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  constructor(private profileService: ProfileService) { }

  skilsData: Array<SkillsDataDto>;
  ngOnInit() {
    this.profileService.getSkills().subscribe(
      data => {
        console.log('test data', data['skillsData']);
        this.skilsData = data['skillsData'];
        console.log('get test data=>', this.skilsData);
      }
    );
  }

}
