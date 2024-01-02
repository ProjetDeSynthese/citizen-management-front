import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeHabitatComponent } from './liste-habitat.component';

describe('ListeHabitatComponent', () => {
  let component: ListeHabitatComponent;
  let fixture: ComponentFixture<ListeHabitatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeHabitatComponent]
    });
    fixture = TestBed.createComponent(ListeHabitatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
