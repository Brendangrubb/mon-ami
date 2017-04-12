export class Profile {
  constructor(
    public about: string,
    public age: number,
    public children = [],
    public gender: string,
    public interests = [],
    public location = [],
    public matches = [],
    public status: string,
    public uid: string,
    public username: string
  ) { }
}
