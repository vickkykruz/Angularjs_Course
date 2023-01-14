import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerComponent } from './container/container.component';
import { EmployeeComponent } from './employee/employee.component';
import { LoginGuard } from './guards/login.guard';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
// import { RoomsAddComponent } from './rooms-add/rooms-add.component';
// import { RoomsBookingComponent } from './rooms-booking/rooms-booking.component';
// import { RoomsComponent } from './rooms/rooms.component';

const routes: Routes = [
  // How to config route...
  // In config route we this to pass two things 1. path and 2. component
  // {path: 'employee', component: EmployeeComponent},
  // {path: 'rooms', component: RoomsComponent}

  // How to setup a default url
  /* E.g Assuing a user enter the site, and you the devloper don't want the user to see the home page, we can create a 
  default url */
  // { path: 'employee', component: EmployeeComponent },

  // Lazy Loading for employee
  // To config the router guide => it is important to pass the card
  {
    path: 'employee',
    canActivate: [LoginGuard],
    loadChildren: () =>
      // Here we are redirecting importing the rooms module => Here we re try to lazy load it
      import('./employee/employee.module').then((m) => m.EmployeeModule),
  },
  // {path: 'rooms', component: RoomsComponent},
  // {path: 'rooms/add', component: RoomsAddComponent},
  { path: 'login', component: LoginComponent },

  // To Config the lazyloading =>  Rooms Module
  {
    path: 'rooms',
    canActivate: [LoginGuard],
    canLoad: [LoginGuard],
    loadChildren: () =>
      // Here we are redirecting importing the rooms module => Here we re try to lazy load it
      import('./rooms/rooms.module').then((m) => m.RoomsModule),
  },

  // To create a Dynamic Route (such as pasing an id in the url => /rooms/{id})
  // When the user click on select button it will carry the key {id}
  // {path: 'rooms/:id', component: RoomsBookingComponent},

  // How to do it
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'booking',
    // canActivate: [LoginGuard],
    loadChildren: () =>
      import('./rooms-booking/booking/booking.module').then(
        (m) => m.BookingModule
      ),
  }, // based on the fact that /rooms is already config up

  // To create a wild card route => 404 Pages
  { path: '**', component: NotfoundComponent }, // This '**' means that any route that does not match the paths should be cature be it
  // Using this we can generate a 404 page and instan the page inside the redirectTo
];

@NgModule({
  // forRoot should be config once. You should not config forRoot multiple times
  // forRoot is a singleken serve, so we can add the route into a singleton servrices and it is availble globally
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
