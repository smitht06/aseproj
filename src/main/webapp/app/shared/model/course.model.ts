import { Moment } from 'moment';
import { IChapter } from 'app/shared/model/chapter.model';

export interface ICourse {
  id?: number;
  name?: string;
  number?: number;
  length?: string;
  description?: string;
  createdById?: number;
  createdDate?: Moment;
  owns?: IChapter[];
}

export class Course implements ICourse {
  constructor(
    public id?: number,
    public name?: string,
    public number?: number,
    public length?: string,
    public description?: string,
    public createdById?: number,
    public createdDate?: Moment,
    public owns?: IChapter[]
  ) {}
}
