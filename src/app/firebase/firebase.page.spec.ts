import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FirebasePage } from './firebase.page';

describe('FirebasePage', () => {
  let component: FirebasePage;
  let fixture: ComponentFixture<FirebasePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FirebasePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
