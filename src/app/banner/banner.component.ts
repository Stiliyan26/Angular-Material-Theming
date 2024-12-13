import { Component } from '@angular/core';

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

}