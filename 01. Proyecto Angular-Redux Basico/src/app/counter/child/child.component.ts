import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() _count: number;
  @Output() _countChangeEvent = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit() {
  }

  multiply() {
    this._count = this._count * 2;
    this._countChangeEvent.emit(this._count);
  }

  divide() {
    this._count = this._count / 2;
    this._countChangeEvent.emit(this._count);
  }

  update(newCounter) {
    this._count = newCounter;
    this._countChangeEvent.emit(this._count);
  }
}
