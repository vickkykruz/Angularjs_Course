import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';



@NgModule({
  declarations: [
    // We can declear a registered component in multiple model but we can import the module inside multipe moduel
    HeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ // this means that anyone outside this module can use it
    HeaderComponent
  ]
})
export class HeaderModule { }
