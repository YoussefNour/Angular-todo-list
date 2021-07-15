import { Component, OnInit , Input, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/models/Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tasks-item',
  templateUrl: './tasks-item.component.html',
  styleUrls: ['./tasks-item.component.css']
})
export class TasksItemComponent implements OnInit {
  @Input() task: Task;
  @Output() ondeleteTask: EventEmitter<Task> = new EventEmitter();
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onToggleTask: EventEmitter<Task> = new EventEmitter();
  faTimes = faTimes;
  constructor() { }

  ngOnInit(): void {
  }

  onDelete(task: Task): void{
    this.ondeleteTask.emit(task);
  }

  onToggle(task: Task): void{
    this.onToggleTask.emit(task);
  }
}
