import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from '../../Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tasks-item',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './tasks-item.component.html',
  styleUrl: './tasks-item.component.css'
})
export class TasksItemComponent{
  @Input()
  task!: Task;
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter();
  
  faTimes = faTimes;

  onDelete(task: any){
    this.onDeleteTask.emit(task);
  }

  onToggle(task: any){
    this.onToggleReminder.emit(task); //after emiting go tho parent component since comm is now possible
  }
  
}
