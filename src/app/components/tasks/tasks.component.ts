import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { CommonModule } from '@angular/common';
import { TasksItemComponent } from '../tasks-item/tasks-item.component';
import { Task } from '../../Task';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CommonModule, TasksItemComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent implements OnInit{
  tasks: Task[] = [];

  constructor(private taskService: TaskService){}

  ngOnInit(): void {
    this.taskService.getTask().subscribe((tasks)=> this.tasks = tasks);
  }

}
