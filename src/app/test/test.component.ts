import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-test',
  // selector: '[app-test]',
  // selector: '.app-test',
  standalone: true,
  imports: [CommonModule],
  // templateUrl: './test.component.html',
  // template: '<h1>Inline Template</h1>',
  // styleUrl: './test.component.css',

  template: `
    <h1>Welcome {{ greetUser() }}</h1>

    <p class="text-special">{{ siteUrl }}</p>
    <p [class]="successClass">{{ siteUrl }}</p>
    <p [class.text-danger]="hasError">{{ siteUrl }}</p>

    <p [ngClass]="messageClasses">{{ siteUrl }}</p>
    <input type="text" name="" [id]="myId" />
    <input type="text" name="" id="{{ myId }}" [disabled]="disabled" />
    <input type="text" name="" id="{{ myId }}" bind-disabled="disabled" />
  `,
  styles: [
    `
      h1 {
        color: blue;
      }
      .text-success {
        color: green;
        font-size: 20px;
      }
      .text-danger {
        color: red;
      }
      .text-special {
        font-style: italic;
        font-size: 30px;
      }
    `,
  ],
})
export class TestComponent {
  public name = 'Shwaz';

  public siteUrl = window.location.href;
  public myId = 'testId';
  public disabled = true;

  public successClass = 'text-success';
  public hasError = true;
  public isSpecial = false;

  public messageClasses: { [key: string]: boolean } = {
    'text-success': !this.hasError,
    'text-danger': this.hasError,
    'text-special': this.isSpecial,
  };

  greetUser() {
    return 'Hello ' + this.name;
  }
}
