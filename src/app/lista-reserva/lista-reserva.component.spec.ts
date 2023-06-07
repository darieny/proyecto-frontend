import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaReservaComponent } from './lista-reserva.component';

describe('ListaReservaComponent', () => {
  let component: ListaReservaComponent;
  let fixture: ComponentFixture<ListaReservaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaReservaComponent]
    });
    fixture = TestBed.createComponent(ListaReservaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
