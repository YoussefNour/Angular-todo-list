import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppComponent } from './app.component';

import { LayoutModule } from './layout/layout.module';
import { TasksModule } from './tasks/tasks.module';
import { AboutComponent } from './components/about/about.component';

@NgModule({
  declarations: [AppComponent, AboutComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    TasksModule,
    AppRoutingModule,
    LayoutModule,
  ],
  exports: [FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  // constructor(fa: FaIconLibrary, faConfig: FaConfig) {
  //   fa.addIconPacks(fab, fas, far);
  //   faConfig.fixedWidth = true;
  // }
}
