import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPasajeroComponent } from './lista-pasajero.component';

describe('ListaPasajeroComponent', () => {
  let component: ListaPasajeroComponent;
  let fixture: ComponentFixture<ListaPasajeroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaPasajeroComponent]
    });
    fixture = TestBed.createComponent(ListaPasajeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
