import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoomsComponent } from './rooms/rooms.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RoomsListComponent } from './rooms/rooms-list/rooms-list.component';
import { HeaderComponent } from './header/header.component';
import { ContainerComponent } from './container/container.component';
import { EmployeeComponent } from './employee/employee.component';
import { API_CONFIG, APP_SERVICE_CONFIG } from './ApiConfig/apiconfig.service';;
import { localStorageToken } from './localstorage.token'; // Maully registing the localstorage Token in the modulee

@NgModule({
  declarations: [
    AppComponent,
    RoomsComponent,
    RoomsListComponent,
    HeaderComponent,
    ContainerComponent,
    EmployeeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, // so in setting http it is important to import the HttpClientModule in the app module
    AppRoutingModule,
    NgbModule
  ],
  providers: [
    // This when we register services manully
    {
      provide: APP_SERVICE_CONFIG, // The service provider in AICOnfig
      useValue: API_CONFIG // The value
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
