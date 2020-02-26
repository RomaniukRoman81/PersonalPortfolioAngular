
​export class EducationDataDto {
    id: number;
    institution: string;
    stream: string;
    faculty: string;
    fromToYear: string;
    diplomaOrCertificate: string;

    'type'?: 'EducationDataDto';

    constructor(data?: any) {
        if (data) {
            this.id = data.id;
            this.institution = data.institution;
            this.stream = data.stream;
            this.faculty = data.faculty;
            this.fromToYear = data.fromToYear;
            this.diplomaOrCertificate = data.diplomaOrCertificate;
        }
    }
}
