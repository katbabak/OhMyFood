import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthoristaionComponent } from './authoristaion.component';

describe('AuthoristaionComponent', () => {
  let component: AuthoristaionComponent;
  let fixture: ComponentFixture<AuthoristaionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthoristaionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthoristaionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
