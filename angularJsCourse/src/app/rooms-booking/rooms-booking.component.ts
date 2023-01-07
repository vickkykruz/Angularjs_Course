import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-rooms-booking',
  templateUrl: './rooms-booking.component.html',
  styleUrls: ['./rooms-booking.component.sass']
})
export class RoomsBookingComponent implements OnInit {

  
  constructor(private router: ActivatedRoute) {}

  // ActivedRoute
  id: number = 0;

  // Using stream
  // id$ !: Observable<number>;

  // id$ = this.router.params.pipe(
  //   map(params => params['id'])
  //  );

  //  Functionalit of ParaMap 
  
  id$ = this.router.paramMap.pipe(
    map(params => params.get('id'))
   );

  ngOnInit(): void {
    // this.router.params.subscribe((params)=> {
    //   // console.log(params);

    //   // Now to display this key
    //   // console.log(params['id'])
    //   this.id = params['id'];
    // }) // This to avoid the leakage of info using subscriber

    // Another way. But not Recommendaed
    // this.id = this.router.snapshot.params['id']
    /* Different between snapshot and subscribe:
    Snapshot => will never update the data unless you are changing the value in the same view
    (i.e it will never reciever a new value unless it is already in the view )
    */

  //  this.id$ = this.router.params.pipe(
  //   map(params => params['id'])
  //  )
  }
}
