import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosCreateModalFormComponent } from './todos-create-modal-form.component';

describe('TodosCreateModalFormComponent', () => {
  let component: TodosCreateModalFormComponent;
  let fixture: ComponentFixture<TodosCreateModalFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodosCreateModalFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosCreateModalFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
