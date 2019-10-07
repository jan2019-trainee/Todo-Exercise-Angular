import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosDeleteModalFormComponent } from './todos-delete-modal-form.component';

describe('TodosDeleteModalFormComponent', () => {
  let component: TodosDeleteModalFormComponent;
  let fixture: ComponentFixture<TodosDeleteModalFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodosDeleteModalFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosDeleteModalFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
