import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'course',
        loadChildren: () => import('./course/course.module').then(m => m.CourseMaster3KCourseModule),
      },
      {
        path: 'chapter',
        loadChildren: () => import('./chapter/chapter.module').then(m => m.CourseMaster3KChapterModule),
      },
      {
        path: 'material',
        loadChildren: () => import('./material/material.module').then(m => m.CourseMaster3KMaterialModule),
      },
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ]),
  ],
})
export class CourseMaster3KEntityModule {}
