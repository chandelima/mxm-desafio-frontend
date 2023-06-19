import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeritageGroupFormComponent } from './heritage-group-form.component';

describe('HeritageGroupFormComponent', () => {
  let component: HeritageGroupFormComponent;
  let fixture: ComponentFixture<HeritageGroupFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeritageGroupFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeritageGroupFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
