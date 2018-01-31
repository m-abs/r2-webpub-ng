import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollBookViewComponent } from './scroll-book-view.component';

describe('ScrollBookViewComponent', () => {
  let component: ScrollBookViewComponent;
  let fixture: ComponentFixture<ScrollBookViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrollBookViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollBookViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
