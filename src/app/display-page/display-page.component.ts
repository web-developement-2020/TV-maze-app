import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IDisplayPage } from '../idisplay-page'
import { DisplayService } from '../display.service';
import { IShow } from '../ishow';
import { IShowDetails } from '../ishow-details';


@Component({
  selector: 'app-display-page',
  templateUrl: './display-page.component.html',
  styleUrls: ['./display-page.component.css'],
})
export class DisplayPageComponent implements OnInit {
  @Output() getDetailEvent = new EventEmitter<number>();
  @Input() date: Date;
  @Input() showsByDate: IShow[];
  @Input() showD: IShowDetails;
  @Input() shows: IShow[];
  @Input() showDetail: IShow;

  current: IDisplayPage;

  constructor() {}

  ngOnInit(): void {
    // this.dispalyService.getDisplayPage(new Date).subscribe(data =>this.current = data)
  }

  getDetail(id): void {
    return this.getDetailEvent.emit(id);
  }
}
