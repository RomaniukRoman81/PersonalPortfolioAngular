
​export class SkillsDataDto {
    id: number;
    skill: string;
    progress: string;

    'type'?: 'SkillsDataDto';

    constructor(data?: any) {
        if (data) {
            this.id = data.id;
            this.skill = data.regularOtcDrugs;
            this.progress = data.newPrescribedRx;
        }
    }
}
