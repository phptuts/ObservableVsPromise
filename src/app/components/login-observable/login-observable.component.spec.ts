import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginObservableComponent } from './login-observable.component';

describe('LoginObservableComponent', () => {
  let component: LoginObservableComponent;
  let fixture: ComponentFixture<LoginObservableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginObservableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
