import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { CourseMaster3KSharedModule } from 'app/shared/shared.module';
import { CourseMaster3KCoreModule } from 'app/core/core.module';
import { CourseMaster3KAppRoutingModule } from './app-routing.module';
import { CourseMaster3KHomeModule } from './home/home.module';
import { CourseMaster3KEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    CourseMaster3KSharedModule,
    CourseMaster3KCoreModule,
    CourseMaster3KHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    CourseMaster3KEntityModule,
    CourseMaster3KAppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent],
})
export class CourseMaster3KAppModule {}
