import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { importProvidersFrom, inject } from '@angular/core';
import { ThemeManager } from './app/core/theme-manager.service';
import { MATERIAL_SANITY_CHECKS } from '@angular/material/core';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(BrowserAnimationsModule),
    {
      provide: MATERIAL_SANITY_CHECKS ,
      useFactory: () => inject(ThemeManager).theme$
    }
  ],
}).catch((err) => console.error(err));
