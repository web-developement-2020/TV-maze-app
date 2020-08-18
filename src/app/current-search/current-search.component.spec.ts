import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentSearchComponent } from './current-search.component';

describe('CurrentSearchComponent', () => {
  let component: CurrentSearchComponent;
  let fixture: ComponentFixture<CurrentSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
