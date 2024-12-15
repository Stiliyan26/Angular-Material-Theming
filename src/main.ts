import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { importProvidersFrom, inject, PLATFORM_INITIALIZER } from '@angular/core';
import { ThemeManager } from './app/core/theme-manager.service';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(BrowserAnimationsModule),
    {
      provide: PLATFORM_INITIALIZER,
      useFactory: () => inject(ThemeManager).theme$
    }
  ],
}).catch((err) => console.error(err));
