import { OpaqueToken } from '@angular/core';

export const APP_CONFIG = new OpaqueToken('app.config');

export interface AppConfig {
  apiEndpoint: string;
  apiToken: string;
  apiNodesPath: string;
  apiNodePath: string;
  apiNewNodePath: string;
  apiLoginPath: string;
  apiLogoutPath: string;
  apiRegisterPath: string;
  apiRequestFormat: string;
  apiSupportsPath: string;
  apiSupportPath: string;
  apiNewSupportPath:string;

}

export const DEFAULT_APP_CONFIG: AppConfig = {
  apiEndpoint: 'http://yonescat.co.uk',
  apiToken: 'crsf_token',
  apiNodesPath: '/api/v1/article',
  apiNodePath: '/node',
  apiNewNodePath: '/entity/node/',
  apiSupportsPath: '/api/v1/article',
  apiSupportPath: '/support-tickets',
  apiNewSupportPath: '/entity/node/',
  apiLoginPath: '/user/login',
  apiLogoutPath: '/user/logout',
  apiRegisterPath: '/user/register',
  /* apiRequestFormat: '?_format=hal_json' */
  apiRequestFormat: '?_format=json'
};
