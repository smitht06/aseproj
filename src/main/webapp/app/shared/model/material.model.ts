import { IChapter } from 'app/shared/model/chapter.model';

export interface IMaterial {
  id?: number;
  name?: string;
  type?: string;
  link?: string;
  chapter?: IChapter;
}

export class Material implements IMaterial {
  constructor(public id?: number, public name?: string, public type?: string, public link?: string, public chapter?: IChapter) {}
}
