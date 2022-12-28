import { AfterContentInit, Component, ContentChild, Host } from '@angular/core';
import { EmployeeComponent } from '../employee/employee.component';
import { RoomsService } from '../rooms/services/rooms.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.sass'],
  providers: [RoomsService]
})
export class ContainerComponent implements AfterContentInit {
  // We declare a @ContentChild to fetch EmployeeComponent
  @ContentChild(EmployeeComponent) empComponent!: EmployeeComponent;
  // To use AfterContentInit
  ngAfterContentInit(): void {
    // How to select components
    console.log(this.empComponent);
    this.empComponent.employName = "Michieal";
  }

  constructor(@Host() private roomsService: RoomsService) {}
}
