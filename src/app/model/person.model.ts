export class Person {
  id?: Number;
  name: string;
  location: string;
  profile_text: string;
  email: string;
  position: string;
  profile_img: string;
  hero_img: string;

  constructor(
    name: string,
    location: string,
    profile_text: string,
    email: string,
    position: string,
    profile_img: string,
    hero_img: string
  ) {
    this.name = name;
    this.location = location;
    this.profile_text = profile_text;
    this.email = email;
    this.position = position;
    this.profile_img = profile_img;
    this.hero_img = hero_img;
  }
}
