import { AfterViewInit, Component, ElementRef, Inject, OnInit, Optional, ViewChild, ViewContainerRef } from '@angular/core';
import { localStorageToken } from './localstorage.token';
import { LoggerService } from './logger.service';
import { RoomsComponent } from './rooms/rooms.component';

@Component({
  selector: 'app-root', // this is the registered tag to dispalyed in index.html. The name of the tag should be registed in the component clas
  templateUrl: './app.component.html', // The is the temeplate url that fetch the file to be displayed
  // Anothe way is the inline template
  // template: `<h1> Hi I'm VickkyKruz </h1>
  //   <p>Im happy to learn angular</p>
  // `,
  // styles: [`
  // h1 {
  //   text-deoration: underline;
  // }
  //  `] // This is the inline styling

  styleUrls: ['./app.component.sass'],
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'angularJsCourse';
  // We want declear loginType as Admin Using ng-Swicth
  role = 'Users';

  // To render other component to the ng-template
  @ViewChild('user', {read: ViewContainerRef}) vcr!: ViewContainerRef;
  @ViewChild('name', {static: true}) name!: ElementRef;

  // Using the Optional decorator we restrict the Loggerervice Provider in the view.
  // Assume ther is an error in the LoggerService Provider, it restrict the error from being display in the view
  // To inject localstorage localStorage: any can be used if there is any error
  constructor(@Optional() private loggerService: LoggerService,
  @Inject(localStorageToken) private localStorage: Storage) {} // To uses seassionStorage change or create an injjectio lyk dis

  ngOnInit(): void {
    this.loggerService?.log('AppComponent.ngOnInit()');
    this.name.nativeElement.innerText = "VickkyBoi Hotel";
    // To add Something to localstorage
    this.localStorage.setItem('name', 'Onwuegbuchulem Victor Chukwuemeka');
    // const componentRef = this.vcr.createComponent(RoomsComponent);
  }

  ngAfterViewInit(): void {
    const componentRef = this.vcr.createComponent(RoomsComponent);
    // // Incase you want to modifty an property
    componentRef.instance.numberOfRooms = 35;
  }

  // Let's see how to access a div elements

}
