import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/models/Task';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();
  text: string;
  day: string;
  done = false;
  showAddTask = false;
  subscription: Subscription;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService.onToggle().subscribe(
      (value) => (this.showAddTask  = value)
    );
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (!this.text) {
      alert('enter a task name');
      return;
    }
    const newTask = {
      text: this.text,
      day: this.day,
      done: this.done,
    };
    this.onAddTask.emit(newTask);
    this.text = '';
    this.day = '';
    this.done = false;
  }
}
