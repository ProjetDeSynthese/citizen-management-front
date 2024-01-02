import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDetailHabitatComponent } from './view-detail-habitat.component';

describe('ViewDetailHabitatComponent', () => {
  let component: ViewDetailHabitatComponent;
  let fixture: ComponentFixture<ViewDetailHabitatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewDetailHabitatComponent]
    });
    fixture = TestBed.createComponent(ViewDetailHabitatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
