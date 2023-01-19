import { InjectionToken } from "@angular/core";
import { RouteConfig } from "./routeConfig";

export const routeConfig = new InjectionToken<RouteConfig>('routeConfig');

// Let see how we can use provder it as 'any'