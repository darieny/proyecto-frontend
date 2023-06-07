import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresarBoletosComponent } from './ingresar-boletos.component';

describe('IngresarBoletosComponent', () => {
  let component: IngresarBoletosComponent;
  let fixture: ComponentFixture<IngresarBoletosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IngresarBoletosComponent]
    });
    fixture = TestBed.createComponent(IngresarBoletosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
