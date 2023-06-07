import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarBoletosComponent } from './actualizar-boletos.component';

describe('ActualizarBoletosComponent', () => {
  let component: ActualizarBoletosComponent;
  let fixture: ComponentFixture<ActualizarBoletosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActualizarBoletosComponent]
    });
    fixture = TestBed.createComponent(ActualizarBoletosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
