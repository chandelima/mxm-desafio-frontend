import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeritageSubgroupFormComponent } from './heritage-subgroup-form.component';

describe('HeritageSubgroupFormComponent', () => {
  let component: HeritageSubgroupFormComponent;
  let fixture: ComponentFixture<HeritageSubgroupFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeritageSubgroupFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeritageSubgroupFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
