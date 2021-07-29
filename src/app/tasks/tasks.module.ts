import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';

import { LayoutModule } from '../layout/layout.module';
import { AddTaskComponent } from './add-task/add-task.component';
import { TasksComponent } from './list-tasks/tasks.component';
import { TasksItemComponent } from './tasks-item/tasks-item.component';
import { TasksRoutingModule } from './tasks-routing.module';

const COMPONENTS = [TasksComponent, TasksItemComponent, AddTaskComponent];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [CommonModule, FontAwesomeModule, FormsModule, LayoutModule, TasksRoutingModule],
  // exports: [...COMPONENTS],
})
export class TasksModule {}
