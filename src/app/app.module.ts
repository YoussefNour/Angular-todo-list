import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppComponent } from './app.component';

import { LayoutModule } from './layout/layout.module';
import { TasksModule } from './tasks/tasks.module';
import { AboutModule } from './about/about.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    TasksModule,
    AppRoutingModule,
    LayoutModule,
    AboutModule
  ],
  exports: [FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
