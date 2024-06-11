import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  // selector: '[app-test]',
  // selector: '.app-test',
  standalone: true,
  imports: [],
  // templateUrl: './test.component.html',
  // template: '<h1>Inline Template</h1>',
  template: ` <h1>Inline Template</h1> `,
  // styleUrl: './test.component.css',
  styles: [
    `
      h1 {
        color: blue;
      }
    `,
  ],
})
export class TestComponent {}
