import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CourseMaster3KSharedModule } from 'app/shared/shared.module';

import { DocsComponent } from './docs.component';

import { docsRoute } from './docs.route';

@NgModule({
  imports: [CourseMaster3KSharedModule, RouterModule.forChild([docsRoute])],
  declarations: [DocsComponent],
})
export class DocsModule {}
