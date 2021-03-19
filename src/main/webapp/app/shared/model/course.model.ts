import { Moment } from 'moment';
import { IChapter } from 'app/shared/model/chapter.model';
import { IUser } from 'app/core/user/user.model';

export interface ICourse {
  id?: number;
  name?: string;
  number?: number;
  length?: string;
  description?: string;
  createdById?: number;
  createdDate?: Moment;
  chapters?: IChapter[];
  teacher?: IUser;
  students?: IUser[];
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
    public chapters?: IChapter[],
    public teacher?: IUser,
    public students?: IUser[]
  ) {}
}
