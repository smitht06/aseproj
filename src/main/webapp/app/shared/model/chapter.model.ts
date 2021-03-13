import { IMaterial } from 'app/shared/model/material.model';

export interface IChapter {
  id?: number;
  number?: number;
  name?: string;
  description?: string;
  courseId?: number;
  consistsOfs?: IMaterial[];
}

export class Chapter implements IChapter {
  constructor(
    public id?: number,
    public number?: number,
    public name?: string,
    public description?: string,
    public courseId?: number,
    public consistsOfs?: IMaterial[]
  ) {}
}
