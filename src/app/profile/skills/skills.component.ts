import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { SkillDataDto } from 'src/app/models/SkillDataDto';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  skillsData: Array<SkillDataDto>;

  constructor(private profileService: ProfileService) { }

  ngOnInit() {
    this.profileService.getSkills().subscribe(
      data => {
        this.skillsData = data['skillsData'];
      }
    );
  }
}
