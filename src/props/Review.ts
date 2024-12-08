import {UserData} from './User.ts';

export type Review = {
  id: string;
  date: string;
  user: UserData;
  comment: string;
  rating: number;
}
