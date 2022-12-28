import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnDestroy, Output, SimpleChanges } from '@angular/core';
import { RoomList } from '../rooms';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomsListComponent implements OnChanges, OnDestroy{
  // Interact with component
  // Use of @Input and @Output
  // Input function is used to render data from the parent component to the child componet
  // Because a the stage it asked the data from the parent
  @Input()rooms: RoomList[] = [];


  // Output functions psses data/request from child component to the parent component
  @Output() selectedRoom = new EventEmitter<RoomList>();

  constructor() {}
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    if(changes['title']){
      this.title = changes['title'].currentValue.toUpperCase();
    }
  }
  // How to access the property from OnChanges
  @Input() title: string = 'Room List';

  selectRoom(room: RoomList){
    this.selectedRoom.emit(room);
  }

  ngOnDestroy(): void {
    console.log("On Destory is called");
  }
}
