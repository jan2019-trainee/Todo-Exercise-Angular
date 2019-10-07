import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersDeleteModalFormComponent } from './users-delete-modal-form.component';

describe('UsersDeleteModalFormComponent', () => {
  let component: UsersDeleteModalFormComponent;
  let fixture: ComponentFixture<UsersDeleteModalFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersDeleteModalFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersDeleteModalFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
