import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Ventana4Page } from './ventana4.page';

describe('Ventana4Page', () => {
  let component: Ventana4Page;
  let fixture: ComponentFixture<Ventana4Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Ventana4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
