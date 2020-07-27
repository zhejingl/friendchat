// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  // server: 'http://localhost:8080',
  // loginUrl: '/v1/api/demo/social/login',
  server: 'https://api-stone-door-group-apicast-staging.apps.appdev-7.pd.stonedoor.io:443', 
  // server: 'http://istio-ingressgateway-istio-system.apps.appdev-7.pd.stonedoor.io',
  loginUrl: '/v1/api/demo/social/login?user_key=2ed3aa9f4732fa5034816329e58f9f2e',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
