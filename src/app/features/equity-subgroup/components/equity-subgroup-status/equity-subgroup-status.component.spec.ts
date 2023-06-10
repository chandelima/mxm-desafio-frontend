import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquitySubgroupStatusComponent } from './equity-subgroup-status.component';

describe('EquitySubgroupStatusComponent', () => {
  let component: EquitySubgroupStatusComponent;
  let fixture: ComponentFixture<EquitySubgroupStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EquitySubgroupStatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EquitySubgroupStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
