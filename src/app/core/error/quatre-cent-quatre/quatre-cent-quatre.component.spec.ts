import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuatreCentQuatreComponent } from './quatre-cent-quatre.component';

describe('QuatreCentQuatreComponent', () => {
  let component: QuatreCentQuatreComponent;
  let fixture: ComponentFixture<QuatreCentQuatreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuatreCentQuatreComponent]
    });
    fixture = TestBed.createComponent(QuatreCentQuatreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
