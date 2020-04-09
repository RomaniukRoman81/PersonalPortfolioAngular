import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SkillDataDto } from '../models/SkillDataDto';
import { Constants } from '../constants';
import { EducationDataDto } from '../models/EducationDataDto';
import { ExprienceDataDto } from '../models/ExprienceDataDto';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(
    private httpClient: HttpClient,
    private readonly constans: Constants
  ) { }

  getSkills(): Observable<Array<SkillDataDto>> {
    return this.httpClient.get<Array<SkillDataDto>>(this.constans.apiRoutes.skillsListUrl);
  }

  getEducations(): Observable<Array<EducationDataDto>> {
    return this.httpClient.get<Array<EducationDataDto>>(this.constans.apiRoutes.educationalsListUrl);
  }

  getExprience(): Observable<Array<ExprienceDataDto>> {
    return this.httpClient.get<Array<ExprienceDataDto>>(this.constans.apiRoutes.exprienceListUrl);
  }

  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);

    return throwError(errorMessage);
  }
}
