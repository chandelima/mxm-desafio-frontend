import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeritageGroupInfoComponent } from './heritage-group-info.component';

describe('HeritageGroupInfoComponent', () => {
  let component: HeritageGroupInfoComponent;
  let fixture: ComponentFixture<HeritageGroupInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeritageGroupInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeritageGroupInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
