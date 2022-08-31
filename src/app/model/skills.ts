export class Skills {
  id!: number;
  skillName!: string;
  description!: string;
  skill_img!: string;

  constructor(skillName: string, description: string, skill_img: string) {
    this.skillName = skillName;
    this.description = description;
    this.skill_img = skill_img;
  }
}
