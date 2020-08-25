import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IShow } from '../ishow';

@Component({
  selector: 'app-display-page',
  templateUrl: './display-page.component.html',
  styleUrls: ['./display-page.component.css'],
})
export class DisplayPageComponent implements OnInit {
  @Output() getDetailEvent = new EventEmitter<number>();
  @Input() date: Date;
  @Input() showsByDate: IShow[];
  @Input() shows: IShow[];
  @Input() showDetail: IShow;

  constructor() {}

  ngOnInit(): void {}

  getDetail(id): void {
    return this.getDetailEvent.emit(id);
  }
}
