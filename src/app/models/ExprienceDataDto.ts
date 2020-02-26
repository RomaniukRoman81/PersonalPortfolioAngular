
​export class ExprienceDataDto {
    id: number;
    fromToMonthYear: string;
    organization: string;
    designation: string;
    details: Array<string>;

    'type'?: 'ExprienceDataDto';

    constructor(data?: any) {
        if (data) {
            this.id = data.id;
            this.fromToMonthYear = data.fromToMonthYear;
            this.organization = data.organization;
            this.designation = data.designation;
            this.details = data.details;
        }
    }
}
