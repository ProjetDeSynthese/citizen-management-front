import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCitoyensComponent } from './add-citoyens.component';

describe('AddCitoyensComponent', () => {
  let component: AddCitoyensComponent;
  let fixture: ComponentFixture<AddCitoyensComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddCitoyensComponent]
    });
    fixture = TestBed.createComponent(AddCitoyensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
