import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquitySubGroupComponent } from './heritagesub-group.component';

describe('EquitySubGroupComponent', () => {
  let component: EquitySubGroupComponent;
  let fixture: ComponentFixture<EquitySubGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EquitySubGroupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EquitySubGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
