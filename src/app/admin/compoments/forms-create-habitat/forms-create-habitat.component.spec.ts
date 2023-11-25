import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsCreateHabitatComponent } from './forms-create-habitat.component';

describe('FormsCreateHabitatComponent', () => {
  let component: FormsCreateHabitatComponent;
  let fixture: ComponentFixture<FormsCreateHabitatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormsCreateHabitatComponent]
    });
    fixture = TestBed.createComponent(FormsCreateHabitatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
