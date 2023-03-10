import { InjectionToken } from "@angular/core";
import { ApiConfig } from "./apiconfig.interface";

export const APP_SERVICE_CONFIG = new InjectionToken<ApiConfig>('app.config');

export const API_CONFIG: ApiConfig = {
  apiEndpoint: 'https://localhost/3000/api'
}
