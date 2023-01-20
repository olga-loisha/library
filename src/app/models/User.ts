import { Gender } from './enums/gender';

export interface User {
  id: number;
  username: string;
  password?: string;
  firstName: string;
  lastName: string;
  gender: Gender;
  birthday: Date,
  description: string,
  token?: string
}
