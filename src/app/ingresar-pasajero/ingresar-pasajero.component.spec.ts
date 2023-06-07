import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresarPasajeroComponent } from './ingresar-pasajero.component';

describe('IngresarPasajeroComponent', () => {
  let component: IngresarPasajeroComponent;
  let fixture: ComponentFixture<IngresarPasajeroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IngresarPasajeroComponent]
    });
    fixture = TestBed.createComponent(IngresarPasajeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
