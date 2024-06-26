import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-test',
  // selector: '[app-test]',
  // selector: '.app-test',
  standalone: true,
  imports: [CommonModule, FormsModule],
  // templateUrl: './test.component.html',
  // template: '<h1>Inline Template</h1>',
  // styleUrl: './test.component.css',

  template: `
    <h1>Welcome {{ greetUser() }}</h1>

    <input type="text" name="" [id]="myId" />
    <input type="text" name="" id="{{ myId }}" [disabled]="disabled" />
    <input type="text" name="" id="{{ myId }}" bind-disabled="disabled" />

    <p class="text-special">{{ siteUrl }}</p>
    <p [class]="successClass">{{ siteUrl }}</p>
    <p [class.text-danger]="hasError">{{ siteUrl }}</p>

    <p [ngClass]="messageClasses">{{ siteUrl }}</p>

    <p [style.color]="hasError ? 'red' : 'green'">{{ siteUrl }}</p>

    <p [style.color]="highlightColor">{{ siteUrl }}</p>

    <p [ngStyle]="titleStyles">{{ siteUrl }}</p>

    <button (click)="onClick($event)">Greet</button>
    <button on-click="onClick($event)">Greet</button>
    <button (click)="greeting = 'Welcome Vishwas'">Greet</button>
    {{ greeting }}

    <input #myInput type="text" />
    <button (click)="logMessage(myInput)">Log</button>

    <input [(ngModel)]="name" type="text" />
    {{ name }}

    <!-- <div *ngIf="hasError; then thenBlock; else elseBlock"></div>

    <ng-template #thenBlock>
      <h2>Error Block</h2>
    </ng-template>

    <ng-template #elseBlock>
      <h2>Else Block</h2>
    </ng-template> -->

    <!-- <div *ngIf="hasError; else elseBlock">
      <h2>Error Block</h2>
    </div>

    <ng-template #elseBlock>
      <h2>None error Block</h2>
    </ng-template> -->

    <div [ngSwitch]="color">
      <div *ngSwitchCase="'red'">You picked red color</div>
      <div *ngSwitchCase="'blue'">You picked blue color</div>
      <div *ngSwitchCase="'green'">You picked green color</div>
      <div *ngSwitchDefault>Pick again</div>
    </div>
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
  public hasError = false;
  public isSpecial = false;

  public highlightColor = 'orange';

  public titleStyles: { [key: string]: string } = {
    color: 'blue',
    fontStyle: 'italic',
  };

  public messageClasses: { [key: string]: boolean } = {
    'text-success': !this.hasError,
    'text-danger': this.hasError,
    'text-special': this.isSpecial,
  };

  public greeting = '';

  public color = 'red';

  greetUser() {
    return 'Hello ' + this.name;
  }

  onClick(event: MouseEvent) {
    console.log(event);
    this.greeting = 'Welcome to Codevolution';
  }

  logMessage(value: HTMLInputElement) {
    console.log(value);
  }
}
