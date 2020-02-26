import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { EducationDataDto } from 'src/app/models/EducationDataDto';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  educationalsData: Array<EducationDataDto>;

  constructor(private profileService: ProfileService) { }

  ngOnInit() {
    this.profileService.getEducations().subscribe(
      data => {
        this.educationalsData = data['educationalsData'];
      }
    );
  }
}
