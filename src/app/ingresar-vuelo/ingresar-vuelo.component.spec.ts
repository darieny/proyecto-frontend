import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresarVueloComponent } from './ingresar-vuelo.component';

describe('IngresarVueloComponent', () => {
  let component: IngresarVueloComponent;
  let fixture: ComponentFixture<IngresarVueloComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IngresarVueloComponent]
    });
    fixture = TestBed.createComponent(IngresarVueloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
