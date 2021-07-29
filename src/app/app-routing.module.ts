import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './views/homepage/homepage.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  {
    path: 'tasks',
    loadChildren: () =>
      import('./tasks/tasks.module').then((m) => m.TasksModule),
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./about/about.module').then((m) => m.AboutModule),
  },
  { path: '**', component: HomepageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
