import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { CommonModule } from '@angular/common';
import { TasksItemComponent } from '../tasks-item/tasks-item.component';
import { Task } from '../../Task';
import { AddTaskComponent } from '../add-task/add-task.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CommonModule, TasksItemComponent, AddTaskComponent], //new components needed are embedded in the import section
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent implements OnInit{
  tasks: Task[] = [];

  constructor(private taskService: TaskService){}

  ngOnInit(): void {
    this.taskService.getTask().subscribe((tasks)=> this.tasks = tasks);
  }

  deleteTask(task: Task){
    this.taskService.deleteTask(task).subscribe(
      () => (this.tasks = this.tasks.filter((t)=> t.id !== task.id))//removes from UI
    )
  }

  toggleReminder(task: Task){
    task.reminder = !task.reminder;
    this.taskService.updateTaskReminder(task).subscribe();//subscribe is basically .then 
  }

  addTask(task: Task){
    this.taskService.addTask(task).subscribe(
      (task) => (this.tasks.push(task)))
  }

}
