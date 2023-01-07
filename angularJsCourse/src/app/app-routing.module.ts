import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerComponent } from './container/container.component';
import { EmployeeComponent } from './employee/employee.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RoomsAddComponent } from './rooms-add/rooms-add.component';
import { RoomsBookingComponent } from './rooms-booking/rooms-booking.component';
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
  {path: 'rooms/add', component: RoomsAddComponent},

  
  // To create a Dynamic Route (such as pasing an id in the url => /rooms/{id})
  // When the user click on select button it will carry the key {id}
  {path: 'rooms/:id', component: RoomsBookingComponent},


  // How to do it
  {path: '', redirectTo: '/rooms', pathMatch: 'full'}, // based on the fact that /rooms is already config up

  // To create a wild card route => 404 Pages
  {path: '**', component: NotfoundComponent}, // This '**' means that any route that does not match the paths should be cature be it
  // Using this we can generate a 404 page and instan the page inside the redirectTo

];

@NgModule({
  // forRoot should be config once. You should not config forRoot multiple times
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
