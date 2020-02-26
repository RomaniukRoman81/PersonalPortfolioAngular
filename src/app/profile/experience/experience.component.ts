import { Component, OnInit } from '@angular/core';
import { ExprienceDataDto } from 'src/app/models/ExprienceDataDto';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  exprienceData: Array<ExprienceDataDto>;

  constructor(private profileService: ProfileService) { }

  ngOnInit() {
    this.profileService.getExprience().subscribe(
      data => {
        this.exprienceData = data['exprienceData'];
      }
    );
  }
}
