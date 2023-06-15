import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeritageSubgroupStatusComponent } from './heritage-subgroup-status.component';

describe('HeritageSubgroupStatusComponent', () => {
  let component: HeritageSubgroupStatusComponent;
  let fixture: ComponentFixture<HeritageSubgroupStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeritageSubgroupStatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeritageSubgroupStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
