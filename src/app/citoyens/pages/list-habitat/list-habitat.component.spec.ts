import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListHabitatComponent } from './list-habitat.component';

describe('ListHabitatComponent', () => {
  let component: ListHabitatComponent;
  let fixture: ComponentFixture<ListHabitatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListHabitatComponent]
    });
    fixture = TestBed.createComponent(ListHabitatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
