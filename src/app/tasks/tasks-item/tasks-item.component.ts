import { Component, OnInit , Input, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/models/Task';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tasks-item',
  templateUrl: './tasks-item.component.html',
  styleUrls: ['./tasks-item.component.css']
})
export class TasksItemComponent implements OnInit {
  @Input() task: Task;
  @Output() deleteTask: EventEmitter<Task> = new EventEmitter();
  @Output() ToggleTask: EventEmitter<Task> = new EventEmitter();
  faTimes = faTimes;
  constructor() { }

  ngOnInit(): void {
  }

  Delete(task: Task): void{
    this.deleteTask.emit(task);
  }

  ToggleDone(task: Task): void{
    this.ToggleTask.emit(task);
  }
}
