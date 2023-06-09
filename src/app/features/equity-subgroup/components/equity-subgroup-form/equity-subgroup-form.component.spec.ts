import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquitySubgroupFormComponent } from './equity-subgroup-form.component';

describe('EquitySubgroupFormComponent', () => {
  let component: EquitySubgroupFormComponent;
  let fixture: ComponentFixture<EquitySubgroupFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EquitySubgroupFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EquitySubgroupFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
