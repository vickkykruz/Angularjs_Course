import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomsAddComponent } from '../rooms-add/rooms-add.component';
import { RoomsBookingComponent } from '../rooms-booking/rooms-booking.component';
import { RoomGuard } from './guards/room.guard';
import { RoomsComponent } from './rooms.component';

const routes: Routes = [
  // To config canActivateChild
  // To config the lazy loading in the rooms routing remove the 'rooms' inside the path becuse it has already be assigned in the app routing module
  {path: '', component: RoomsComponent, canActivateChild: [RoomGuard], children: [
    // The is how to use nested routing using children
  // {path: 'rooms', component: RoomsComponent, children: [
    // Place the static route before dynamic route
    {path: 'add', component: RoomsAddComponent},
    {path: ':id', component: RoomsBookingComponent}
  ]},
  // {path: 'rooms/add', component: RoomsAddComponent},
  // {path: 'rooms/:id', component: RoomsBookingComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoomsRoutingModule { }
