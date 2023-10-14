import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { RegisterPage } from './RegisterPage';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('RegisterPage', () => {
  let component: RegisterPage;
  let fixture: ComponentFixture<RegisterPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RegisterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
