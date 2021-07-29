import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppComponent } from './app.component';

import { LayoutModule } from './layout/layout.module';
import { ViewsModule } from './views/views.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    LayoutModule,
    ViewsModule
  ],
  exports: [FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
