import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { countReducer } from './counter/counter.reducer';

import { AppComponent } from './app.component';
import { ChildComponent } from './counter/child/child.component';
import { SubchildComponent } from './counter/subchild/subchild.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    SubchildComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ count: countReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }