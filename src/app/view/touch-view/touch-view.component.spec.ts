import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TouchViewComponent } from './touch-view.component';

describe('TouchViewComponent', () => {
  let component: TouchViewComponent;
  let fixture: ComponentFixture<TouchViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TouchViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TouchViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
