export class Education {
  id!: number;
  educationName!: string;
  description!: string;
  education_img!: string;

  constructor(
    educationName: string,
    description: string,
    education_img: string
  ) {
    this.educationName = educationName;
    this.description = description;
    this.education_img = education_img;
  }
}
