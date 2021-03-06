import { Moment } from 'moment';
import { IUser } from 'app/core/user/user.model';
import { IChapter } from 'app/shared/model/chapter.model';

export interface ICourse {
  id?: number;
  name?: string;
  number?: number;
  length?: string;
  description?: string;
  createdById?: number;
  createdDate?: Moment;
  teacher?: IUser;
  chapters?: IChapter[];
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
    public teacher?: IUser,
    public chapters?: IChapter[],
    public students?: IUser[]
  ) {}
}
