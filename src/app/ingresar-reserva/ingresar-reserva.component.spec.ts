import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresarReservaComponent } from './ingresar-reserva.component';

describe('IngresarReservaComponent', () => {
  let component: IngresarReservaComponent;
  let fixture: ComponentFixture<IngresarReservaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IngresarReservaComponent]
    });
    fixture = TestBed.createComponent(IngresarReservaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
