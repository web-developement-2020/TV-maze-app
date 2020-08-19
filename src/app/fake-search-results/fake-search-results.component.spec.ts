import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FakeSearchResultsComponent } from './fake-search-results.component';

describe('FakeSearchResultsComponent', () => {
  let component: FakeSearchResultsComponent;
  let fixture: ComponentFixture<FakeSearchResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FakeSearchResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FakeSearchResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
