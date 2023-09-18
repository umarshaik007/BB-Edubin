import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CoursesComponent } from './courses/courses.component';
import { EventComponent } from './event/event.component';

const routes: Routes = [
  {path: '', component : HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'cours', component: CoursesComponent},
  {path: 'event', component: EventComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
