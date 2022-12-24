import { Component } from '@angular/core';

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
export class AppComponent {
  title = 'angularJsCourse';
  // We want declear loginType as Admin
  role = 'Users';
}
