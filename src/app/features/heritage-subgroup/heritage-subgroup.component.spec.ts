import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeritageSubgroupComponent } from './heritagesub-group.component';

describe('HeritageSubgroupComponent', () => {
  let component: HeritageSubgroupComponent;
  let fixture: ComponentFixture<HeritageSubgroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeritageSubgroupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeritageSubgroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
