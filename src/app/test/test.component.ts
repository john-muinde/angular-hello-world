import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  // selector: '[app-test]',
  // selector: '.app-test',
  standalone: true,
  imports: [],
  // templateUrl: './test.component.html',
  // template: '<h1>Inline Template</h1>',
  // styleUrl: './test.component.css',

  template: `
    <h1>Welcome {{ greetUser() }}</h1>
    <p>{{ siteUrl }}</p>
  `,
  styles: [
    `
      h1 {
        color: blue;
      }
    `,
  ],
})
export class TestComponent {
  public name = 'Shwaz';
  public siteUrl = window.location.href;

  greetUser() {
    return 'Hello ' + this.name;
  }
}
