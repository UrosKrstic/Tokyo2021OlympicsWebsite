export class Athlete {
  name!: string;
  gender!: string;
  sport!: string;
  disciplines!: string[];
  country!: string;
  isMedalWinner!: boolean

  constructor(name: string) {
    this.name = name;
  }
}
