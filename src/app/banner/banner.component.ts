import { Component, HostBinding, Input } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-banner',
  standalone: true,
  template: `
    <div class="header">
      <h2>Lorem ipsum dolor sit amet.</h2>
    </div>
    <div class="content">
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Reiciendis ea enim perspiciatis amet sed aperiam assumenda facilis, atque nesciunt modi.
      </p>
    </div>
  `,
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {
  @Input() type: ThemePalette | 'success' = 'primary';

  @HostBinding('class') 
  get hostClass() {
    return `${this.type}-banner`
  }
}