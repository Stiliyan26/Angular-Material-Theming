import { Injectable } from '@angular/core';
import { fromEvent, map, shareReplay, startWith, tap } from 'rxjs';

export type Themes = 'light' | 'dark';
export type ThemeUrls = `${Themes}-theme.css`;

const lastLinkWithRel = `link[rel="stylesheet"]:last-of-type`;

@Injectable({
  providedIn: 'root'
})
export class ThemeManager {
  // Detect which theme user prefers
  #preferenceQuery = matchMedia(`(prefers-color-scheme: light)`);

  // Listen to the prefrens changes
  theme$ = fromEvent<MediaQueryList>(this.#preferenceQuery, 'change')
    .pipe(
      startWith(this.#preferenceQuery),
      map(resolvePreferredTheme),
      tap(theme => loadTheme(getThemeLinkElement(), theme)),
      shareReplay() // Hot observable 
    );

  // Sync it with select element on the page

  // Load the corresponding css file (Theme)
}

function resolvePreferredTheme(query: MediaQueryList): Themes {
  return query.matches
    ? 'light'
    : 'dark'
}

function getThemeLinkElement(): HTMLLinkElement {
  const existingLinkEl = document.head.querySelector<HTMLLinkElement>(`#appTheme`);

  if (existingLinkEl) {
    return existingLinkEl;
  }

  const linkEl = document.createElement('link');

  linkEl.setAttribute('rel', 'stylesheet');
  linkEl.setAttribute('id', 'appTheme');

  document.head.querySelector(lastLinkWithRel)?.after(linkEl);
  
  return linkEl;
}

function loadTheme(linkEl: HTMLLinkElement, theme: Themes) {
  linkEl.setAttribute('href', resolveThemeUrl(theme));
}

function resolveThemeUrl(themeName: Themes): ThemeUrls {
  return `${themeName}-theme.css`;
}