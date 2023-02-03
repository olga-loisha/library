import { Genre } from './enums/genre';

export interface Book {
  id: number;
  name: string;
  author: string;
  genre: Genre;
  annotation: string;
  imgUrl: string;
}
