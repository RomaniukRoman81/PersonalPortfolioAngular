
​export class SkillDataDto {
    id: number;
    skill: string;
    progress: string;

    'type'?: 'SkillDataDto';

    constructor(data?: any) {
        if (data) {
            this.id = data.id;
            this.skill = data.skill;
            this.progress = data.progress;
        }
    }
}
