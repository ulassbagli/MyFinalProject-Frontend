import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule }              from './app/app.module';
import { AppComponent } from './app/app.component';

platformBrowserDynamic().bootstrapModule(AppModule);

bootstrapApplication(AppComponent , appConfig)
  .catch((err) => console.error(err));
