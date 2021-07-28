import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/Task';
import { TaskService } from 'src/app/services/task.service';
import { faSort } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];
  fasort = faSort;
  query: string;
  constructor(private taskService: TaskService) {}
  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks));
  }
  deleteTask(task: Task): void {
    this.taskService
      .deleteTask(task)
      .subscribe(
        () => (this.tasks = this.tasks.filter((t) => t.id !== task.id))
      );
  }
  toggleTask(task: Task): void {
    task.done = !task.done;
    this.taskService.toggleTaskReminder(task).subscribe();
  }
  addTask(task: Task): void {
    this.taskService.addTask(task).subscribe((task1) => {
      this.tasks.push(task1);
    });
  }
  SortUnDoneFirst(): void {
    this.taskService
      .sortTasks(this.tasks)
      .subscribe((tasks) => (this.tasks = tasks));
  }
  seachTask(): void {
    this.taskService.searchTask(this.query).subscribe((tasks) => {
      this.tasks = tasks;
    });
  }
}
