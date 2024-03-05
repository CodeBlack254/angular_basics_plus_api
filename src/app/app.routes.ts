import { Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { TasksComponent } from './components/tasks/tasks.component';

export const routes: Routes = [
    { path: '', component: TasksComponent },
    { path: 'about', component: AboutComponent },
    // { path: '**', component: PageNotFoundComponent }, this to be set last if no page is found // Wildcard route for a 404 page
];
