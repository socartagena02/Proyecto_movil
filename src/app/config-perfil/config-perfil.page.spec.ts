import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConfigPerfilPage } from './config-perfil.page';

describe('ConfigPerfilPage', () => {
  let component: ConfigPerfilPage;
  let fixture: ComponentFixture<ConfigPerfilPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ConfigPerfilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
