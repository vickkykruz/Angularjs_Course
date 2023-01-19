import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { BookingComponent } from '../booking.component';

@Injectable({
  providedIn: 'root'
})
export class BookingGuard implements CanDeactivate<BookingComponent> { // Here we pass the Booking Component
  // To give notification before exit
  constructor(private snackBar: MatSnackBar) {}
  canDeactivate(
    component: BookingComponent, // Also here we pass the Booking Component
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(component.bookingForm.pristine) {
      return component.bookingForm.pristine; //here we saying if it dirty we don't allow the user to exit
    }else{
      this.snackBar.open('You have an unsaves changes! ', 'DISCARD');
      return false;
    }
    
  }
  
}
