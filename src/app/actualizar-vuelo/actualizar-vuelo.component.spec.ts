import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarVueloComponent } from './actualizar-vuelo.component';

describe('ActualizarVueloComponent', () => {
  let component: ActualizarVueloComponent;
  let fixture: ComponentFixture<ActualizarVueloComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActualizarVueloComponent]
    });
    fixture = TestBed.createComponent(ActualizarVueloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
