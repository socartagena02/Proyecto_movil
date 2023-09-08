import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Ventana3Page } from './ventana3.page';

describe('Ventana3Page', () => {
  let component: Ventana3Page;
  let fixture: ComponentFixture<Ventana3Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Ventana3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
