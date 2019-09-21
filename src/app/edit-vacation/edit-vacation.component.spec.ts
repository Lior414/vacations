import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditVacationComponent } from './edit-vacation.component';

describe('EditVacationComponent', () => {
  let component: EditVacationComponent;
  let fixture: ComponentFixture<EditVacationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditVacationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditVacationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
