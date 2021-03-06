import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { JhipsterApplicationSharedModule } from 'app/shared/shared.module';
import { JhipsterApplicationCoreModule } from 'app/core/core.module';
import { JhipsterApplicationAppRoutingModule } from './app-routing.module';
import { JhipsterApplicationHomeModule } from './home/home.module';
import { JhipsterApplicationEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ActiveMenuDirective } from './layouts/navbar/active-menu.directive';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    JhipsterApplicationSharedModule,
    JhipsterApplicationCoreModule,
    JhipsterApplicationHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    JhipsterApplicationEntityModule,
    JhipsterApplicationAppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, ActiveMenuDirective, FooterComponent],
  bootstrap: [MainComponent],
})
export class JhipsterApplicationAppModule {}
