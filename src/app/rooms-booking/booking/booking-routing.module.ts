import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingComponent } from './booking.component';
import { BookingGuard } from './guards/booking.guard';

const routes: Routes = [{ path: '', canDeactivate: [BookingGuard], component: BookingComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookingRoutingModule { }
