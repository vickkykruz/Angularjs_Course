import { Component } from '@angular/core';
import { ConfigService } from '../services/config.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent {
  title: string = 'VickkyKruz Title';

  // This can not craete an instance because it's not a lazy loader
  constructor(private ConfigServices: ConfigService) {}
}
