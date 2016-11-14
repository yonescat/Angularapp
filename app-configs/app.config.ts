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
}

export const DEFAULT_APP_CONFIG: AppConfig = {
  apiEndpoint: 'http://drupal8.dev',
  apiToken: 'crsf_token',
  apiNodesPath: '/node-rest-export-path',
  apiNodePath: '/node',
  apiNewNodePath: '/entity/node',
  apiLoginPath: '/user/login',
  apiLogoutPath: '/user/logout',
  apiRegisterPath: '/user/register',
  /* apiRequestFormat: '?_format=hal_json' */
  apiRequestFormat: '?_format=json'
};
