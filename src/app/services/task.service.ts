import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { Observable} from 'rxjs';
import { Task } from '../Task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiURL = 'http://localhost:5000/tasks';

  constructor(private http: HttpClient) { }

  // async getAllHousingLocations(): Promise<HousingLocation[]> {
  //   const data = await fetch(this.url);
  //   return await data.json() ?? [];
  // }

  getTask(): Observable<Task[]>{
   return this.http.get<Task[]>(this.apiURL);
  }
}
