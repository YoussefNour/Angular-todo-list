import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { RouterModule } from '@angular/router';
import { AboutRoutingModule } from './about-routing.module';

@NgModule({
  declarations: [AboutComponent],
  imports: [CommonModule, RouterModule, AboutRoutingModule],
  // exports: [AboutComponent],
})
export class AboutModule {}
