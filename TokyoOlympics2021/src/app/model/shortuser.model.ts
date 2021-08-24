export class ShortUser {
  username!: string;
  country!: string;
  type!: string;

  constructor(username: string, country: string, type: string) {
    this.username = username;
    this.country = country;
    this.type = type;
  }
}
