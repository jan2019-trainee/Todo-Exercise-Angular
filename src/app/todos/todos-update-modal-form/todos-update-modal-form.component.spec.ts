import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosUpdateModalFormComponent } from './todos-update-modal-form.component';

describe('TodosUpdateModalFormComponent', () => {
  let component: TodosUpdateModalFormComponent;
  let fixture: ComponentFixture<TodosUpdateModalFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodosUpdateModalFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosUpdateModalFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
