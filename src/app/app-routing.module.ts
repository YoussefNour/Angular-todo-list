import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TasksModule } from './tasks/tasks.module';
import { AboutComponent } from './about/about/about.component';
import { TasksComponent } from './tasks/list-tasks/tasks.component';

const routes: Routes = [
  { path: '', component: TasksComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', component: TasksComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), TasksModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
