import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeHabitatComponent } from './type-habitat.component';

describe('TypeHabitatComponent', () => {
  let component: TypeHabitatComponent;
  let fixture: ComponentFixture<TypeHabitatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TypeHabitatComponent]
    });
    fixture = TestBed.createComponent(TypeHabitatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
