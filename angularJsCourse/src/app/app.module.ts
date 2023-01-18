import { APP_INITIALIZER, ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ContainerComponent } from './container/container.component';
import { EmployeeComponent } from './employee/employee.component';
import { API_CONFIG, APP_SERVICE_CONFIG } from './ApiConfig/apiconfig.service';
import { localStorageToken } from './localstorage.token'; // Maully registing the localstorage Token in the modulee
import { RequestInterceptor } from './request.interceptor';
import { InitService } from './init.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppNavComponent } from './app-nav/app-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { NotfoundComponent } from './notfound/notfound.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { HoverDirective } from './hover.directive';
import { EmailValidatorDirective } from './email-validator.directive'; // Import the form libary
import { RoomsModule } from './rooms/rooms.module';
import { HeaderModule } from './header/header.module';
import { routeConfig } from './services/routeConfig.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { GlobalErrorHandler } from './errorhandler.service';

// Using App_Initizle
function initFactory(initService: InitService) {
  return () => initService.init();
}
@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    AppNavComponent,
    NotfoundComponent,
    LoginComponent,
    HoverDirective,
    EmailValidatorDirective,
  ],
  imports: [
    BrowserModule,
    HttpClientModule, // so in setting http it is important to import the HttpClientModule in the app module
    // Note: In routing always register the feature route module before the App route
    /* Lazy Loading=> Begin discussed about it on my note. To do this we make Room Module a lazy loader and 
    we remove the rooms module from this app module. After this go to the app route to config it*/
    // RoomsModule, // Here we import the room module in the main app module
    AppRoutingModule, //In routing we need to import the route module here
    NgbModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FormsModule,  // Imprt the forms moduel libary
    HeaderModule,
    MatSnackBarModule
  ],
  providers: [
    // This when we register services manully
    {
      provide: APP_SERVICE_CONFIG, // The service provider in AICOnfig
      useValue: API_CONFIG, // The value
    },
    {
      provide: routeConfig,
      useValue: {title: 'Home'}
    },
    // Registerthe interceptor
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptor,
      multi: true,
    },
    // Register the APP_InitiZlar Functionality
    {
      provide: APP_INITIALIZER,
      useFactory: initFactory,
      deps: [InitService], // This will be the number of services which is provided
      multi: true, // Because App_Initializer is an object
    },
    // GlobalErrorHandler
    {provide: ErrorHandler, useClass: GlobalErrorHandler}
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
