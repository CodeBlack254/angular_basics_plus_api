import { Component, Input, OnInit } from '@angular/core';
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
  @Input() task: Task | undefined;
  faTimes = faTimes;

  onDelete(){
    console.log("delete")
  }
  
}
