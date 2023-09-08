import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Ventana6Page } from './ventana6.page';

describe('Ventana6Page', () => {
  let component: Ventana6Page;
  let fixture: ComponentFixture<Ventana6Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Ventana6Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
