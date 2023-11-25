import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CimqCentComponent } from './cimq-cent.component';

describe('CimqCentComponent', () => {
  let component: CimqCentComponent;
  let fixture: ComponentFixture<CimqCentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CimqCentComponent]
    });
    fixture = TestBed.createComponent(CimqCentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
