import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-subchild',
  templateUrl: './subchild.component.html',
  styleUrls: ['./subchild.component.css']
})
export class SubchildComponent implements OnInit {

  @Input() _count: number;
  @Output() _countChangeEvent = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  reset() {
    this._count = 0;
    this._countChangeEvent.emit(this._count);
  }
}
