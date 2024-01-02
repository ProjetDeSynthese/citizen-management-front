import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCitoyensComponent } from './all-citoyens.component';

describe('AllCitoyensComponent', () => {
  let component: AllCitoyensComponent;
  let fixture: ComponentFixture<AllCitoyensComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllCitoyensComponent]
    });
    fixture = TestBed.createComponent(AllCitoyensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
