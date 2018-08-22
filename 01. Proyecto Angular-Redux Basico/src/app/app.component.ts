import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private _count: number;

  constructor() {
    this._count = 10;
  }

  increment() {
    this._count++;
  }

  decrement() {
    this._count--;
  }
}
