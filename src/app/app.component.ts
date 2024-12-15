import { Component, inject } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectChange, MatSelectModule } from '@angular/material/select';
import { BannerComponent } from './banner/banner.component';
import { localStorageKeyName, ThemeManager } from './core/theme-manager.service';
import { AsyncPipe, NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    BannerComponent,
    AsyncPipe,
    NgIf
  ],
})
export class AppComponent {
  themeManager = inject(ThemeManager);

  get isThemeSelected() {
    return !!localStorage.getItem(localStorageKeyName);
  }

  themeChanges(change: MatSelectChange)  {
    this.themeManager.switchTheme(change.value); // dark or light
  }
}