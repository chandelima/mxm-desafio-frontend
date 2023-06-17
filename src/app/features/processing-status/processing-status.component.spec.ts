import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessingStatusComponent } from './processing-status.component';

describe('ProcessingStatusComponent', () => {
  let component: ProcessingStatusComponent;
  let fixture: ComponentFixture<ProcessingStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcessingStatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProcessingStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
