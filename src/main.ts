import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

  //console.log remove
  // if (environment.production) {
  //   enableProdMode();
  //   if (window) {
  //     window.console.log = function () {};
  //   }
  // }