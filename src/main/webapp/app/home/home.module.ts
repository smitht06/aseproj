import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CourseMaster3KSharedModule } from 'app/shared/shared.module';
import { HOME_ROUTE } from './home.route';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [CourseMaster3KSharedModule, RouterModule.forChild([HOME_ROUTE])],
  declarations: [HomeComponent],
})
export class CourseMaster3KHomeModule {}
