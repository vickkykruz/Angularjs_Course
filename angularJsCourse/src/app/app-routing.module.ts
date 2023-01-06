import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerComponent } from './container/container.component';
import { EmployeeComponent } from './employee/employee.component';
import { RoomsComponent } from './rooms/rooms.component';

const routes: Routes = [
  // How to config route...
  // In config route we this to pass two things 1. path and 2. component
  // {path: 'employee', component: EmployeeComponent},
  // {path: 'rooms', component: RoomsComponent}

  // How to setup a default url
  /* E.g Assuing a user enter the site, and you the devloper don't want the user to see the home page, we can create a 
  default url */
  {path: 'employee', component: EmployeeComponent},
  {path: 'rooms', component: RoomsComponent},
  // How to do it
  {path: '', redirectTo: '/rooms', pathMatch: 'full'} // based on the fact that /rooms is already config up
];

@NgModule({
  // forRoot should be config once. You should not config forRoot multiple times
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
