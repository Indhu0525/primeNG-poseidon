import { bootstrapApplication } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core'; // Import importProvidersFrom
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Import BrowserAnimationsModule
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {
  ...appConfig, // Spread existing appConfig
  providers: [
    ...(appConfig.providers || []), // Ensure appConfig.providers is included
    importProvidersFrom(BrowserAnimationsModule), // Add BrowserAnimationsModule
  ],
}).catch((err) => console.error(err));

