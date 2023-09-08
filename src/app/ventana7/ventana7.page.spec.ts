import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Ventana7Page } from './ventana7.page';

describe('Ventana7Page', () => {
  let component: Ventana7Page;
  let fixture: ComponentFixture<Ventana7Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Ventana7Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
