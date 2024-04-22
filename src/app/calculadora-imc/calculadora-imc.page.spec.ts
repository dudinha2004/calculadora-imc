import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CalculadoraImcPage } from './calculadora-imc.page';

describe('CalculadoraImcPage', () => {
  let component: CalculadoraImcPage;
  let fixture: ComponentFixture<CalculadoraImcPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculadoraImcPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
