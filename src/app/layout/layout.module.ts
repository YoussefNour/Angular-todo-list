import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { ButtonComponent } from './button/button.component';
import { FooterComponent } from './footer/footer.component';

const COMPONENTS = [HeaderComponent, ButtonComponent, FooterComponent];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [CommonModule, RouterModule],
  exports: [...COMPONENTS],
})
export class LayoutModule {
  // tslint:disable-next-line: typedef
  // static forRoot(){
  //   return {
  //     NgModule: LayoutModule,
  //     providers: []
  //   };
  // }
}
