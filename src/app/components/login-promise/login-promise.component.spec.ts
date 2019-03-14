import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPromiseComponent } from './login-promise.component';

describe('LoginPromiseComponent', () => {
  let component: LoginPromiseComponent;
  let fixture: ComponentFixture<LoginPromiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginPromiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPromiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
