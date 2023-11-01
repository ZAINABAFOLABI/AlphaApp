// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  firebase: {
    projectId: 'alphaapp-16065',
    appId: '1:640680362373:web:e685711c6bd9a3e69cc4ec',
    storageBucket: 'alphaapp-16065.appspot.com',
    locationId: 'us-central',
    apiKey: 'AIzaSyD0z5KApGWO5R_QvsDvh9hFuCJyY3Ub-zs',
    authDomain: 'alphaapp-16065.firebaseapp.com',
    messagingSenderId: '640680362373',
    measurementId: 'G-49TQ9D7XXH',
  },
  production: false
};

export const  baseUrl = `http://127.0.0.1:5000/mybolton/v1/auth/`;

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
