import { IMaterial } from 'app/shared/model/material.model';
import { ICourse } from 'app/shared/model/course.model';

export interface IChapter {
  id?: number;
  number?: number;
  name?: string;
  description?: string;
  materials?: IMaterial[];
  course?: ICourse;
}

export class Chapter implements IChapter {
  constructor(
    public id?: number,
    public number?: number,
    public name?: string,
    public description?: string,
    public materials?: IMaterial[],
    public course?: ICourse
  ) {}
}
