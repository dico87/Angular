import { Component } from '@angular/core';
import { Store, Action } from '@ngrx/store';

interface AppState {
  count: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private _count: number;

  constructor(private store: Store<AppState>) {
    this.store.subscribe(state => {
      this._count = state.count;
    })
  }

  increment() {
    const action: Action = {
      type: 'INCREMENT'
    }
    this.store.dispatch(action);    
  }

  decrement() {
    const action: Action = {
      type: 'DECREMENT'
    }
    this.store.dispatch(action);
  }
}
