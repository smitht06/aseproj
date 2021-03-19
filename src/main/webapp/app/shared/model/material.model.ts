export interface IMaterial {
  id?: number;
  name?: string;
  type?: string;
  link?: string;
  chapterId?: number;
}

export class Material implements IMaterial {
  constructor(public id?: number, public name?: string, public type?: string, public link?: string, public chapterId?: number) {}
}
