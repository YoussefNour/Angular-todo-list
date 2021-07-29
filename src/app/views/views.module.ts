import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewsRoutingModule } from './views-routing.module';
import { HomepageComponent } from './homepage/homepage.component';

const VIEWS = [HomepageComponent];

@NgModule({
  declarations: [...VIEWS],
  imports: [
    CommonModule,
    ViewsRoutingModule
  ],
  exports: [...VIEWS]
})
export class ViewsModule { }
