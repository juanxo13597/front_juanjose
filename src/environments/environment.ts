// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
/** variables de entorno dev */
export const environment = {
  production: false,
  info: {
    nameApp: 'Juan José',
    url: {
      github: 'https://github.com/juanxo13597',
      linkedin: 'https://www.linkedin.com/in/juan-jose-navarro-perea/',
    },
  },
  api: '/api/',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
