import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateHabitatComponent } from './create-habitat.component';

describe('CreateHabitatComponent', () => {
  let component: CreateHabitatComponent;
  let fixture: ComponentFixture<CreateHabitatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateHabitatComponent]
    });
    fixture = TestBed.createComponent(CreateHabitatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
