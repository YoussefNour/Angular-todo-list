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
  faSort = faSort;
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
    this.taskService.addTask(task).subscribe((task) => {
      this.tasks.push(task);
    });
  }
  SortUnDoneFirst(): void {
    this.taskService
      .sortTasks(this.tasks)
      .subscribe((tasks) => (this.tasks = tasks));
  }
  seachTask(query: string): void{
    this.taskService.searchTask(query).subscribe((tasks) => {
      this.tasks = tasks;
    });
  }
}
