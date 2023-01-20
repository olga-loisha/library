import { User } from '../models/User';
import {Gender} from "../models/enums/gender";

export const Users: User[] = [
  {
    id: 1,
    username: "bilbo",
    password: "user123",
    firstName: "Bilbo",
    lastName: "Baggins",
    gender: Gender.Male,
    birthday: new Date("1950-03-01T00:00:00.000Z"),
    description: "I love travelling on feet. Especially to mountains."
  },
  {
    id: 2,
    username: "wizzard",
    password: "user456",
    firstName: "Gandalf",
    lastName: "The Grey",
    gender: Gender.Male,
    birthday: new Date("0000-00-00T00:00:00.000Z"),
    description: "I usually find someone from The Small Folk and delegate them a world saving mission."
  }
]
