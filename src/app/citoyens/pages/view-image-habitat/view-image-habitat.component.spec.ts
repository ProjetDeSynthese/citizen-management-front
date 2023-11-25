import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewImageHabitatComponent } from './view-image-habitat.component';

describe('ViewImageHabitatComponent', () => {
  let component: ViewImageHabitatComponent;
  let fixture: ComponentFixture<ViewImageHabitatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewImageHabitatComponent]
    });
    fixture = TestBed.createComponent(ViewImageHabitatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
