import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CourseMaster3KSharedModule } from 'app/shared/shared.module';

import { LogsComponent } from './logs.component';

import { logsRoute } from './logs.route';

@NgModule({
  imports: [CourseMaster3KSharedModule, RouterModule.forChild([logsRoute])],
  declarations: [LogsComponent],
})
export class LogsModule {}
