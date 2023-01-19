import { Inject, Injectable } from '@angular/core';
import { RouteConfig } from './routeConfig';
import { routeConfig } from './routeConfig.service';
// Dependence Injection => any
/* When using any as prodvider, it will provde one instance for the entier code based and it create sepearte instances
for each lazy loaded module and this canbe applied on lazy loader */
@Injectable({
  providedIn: 'any'
})
export class ConfigService {

  constructor(@Inject(routeConfig) private configRouter : RouteConfig) { 
    console.log('ConfigService Initalilize');
    console.log(this.configRouter)
  }
}
