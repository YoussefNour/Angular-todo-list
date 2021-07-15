import { Component, OnInit , Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/models/Task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask : EventEmitter<Task> = new EventEmitter();
  text: string;
  day: string;
  done = false;
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    if(!this.text){
      alert('enter a task name');
      return;
    }
    const newTask = {
      text: this.text,
      day: this.day,
      done: this.done
    };
    this.onAddTask.emit(newTask);
    this.text = '';
    this.day = '';
    this.done = false;
  }
}
