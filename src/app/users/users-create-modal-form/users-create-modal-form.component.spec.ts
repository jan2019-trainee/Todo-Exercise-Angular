import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersCreateModalFormComponent } from './users-create-modal-form.component';

describe('UsersCreateModalFormComponent', () => {
  let component: UsersCreateModalFormComponent;
  let fixture: ComponentFixture<UsersCreateModalFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersCreateModalFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersCreateModalFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
