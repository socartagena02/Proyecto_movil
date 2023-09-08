import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Ventana5Page } from './ventana5.page';

describe('Ventana5Page', () => {
  let component: Ventana5Page;
  let fixture: ComponentFixture<Ventana5Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Ventana5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
