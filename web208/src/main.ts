import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
// import { MainComponent} from './app/home';
// import { MainComponent} from './app/main';

import { MainComponent } from './app/main';
bootstrapApplication(MainComponent, appConfig)
  .catch((err) => console.error(err));

