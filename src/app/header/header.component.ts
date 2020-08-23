import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import {Location} from '@angular/common';
import { HAMMER_LOADER } from '@angular/platform-browser';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Output() searchEvent = new EventEmitter<string>();

  search = new FormControl();
  refreshPage() {
    window.location.reload();
     }
  constructor(private location: Location) {}
  
  ngOnInit(): void {
    this.search.valueChanges
      .pipe(debounceTime(1000))
      .subscribe((data) => this.searchEvent.emit(data));

  }
}
