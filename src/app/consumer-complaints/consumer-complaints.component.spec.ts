import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumerComplaintsComponent } from './consumer-complaints.component';

describe('ConsumerComplaintsComponent', () => {
  let component: ConsumerComplaintsComponent;
  let fixture: ComponentFixture<ConsumerComplaintsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsumerComplaintsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumerComplaintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
