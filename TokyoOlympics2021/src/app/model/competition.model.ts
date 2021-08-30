import { Athlete } from "./athlete.model";
import { User } from "./user.model";

export class Competition {
  sport!: string;
  discipline!: string;
  type!: string;
  venue!: string;
  athletes!: Athlete[];
  delegate!: User[];
  startdatetime!: Date;
  finished!: boolean;
}
