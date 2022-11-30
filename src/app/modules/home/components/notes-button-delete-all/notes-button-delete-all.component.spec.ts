import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesButtonDeleteAllComponent } from './notes-button-delete-all.component';

describe('NotesButtonDeleteAllComponent', () => {
  let component: NotesButtonDeleteAllComponent;
  let fixture: ComponentFixture<NotesButtonDeleteAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotesButtonDeleteAllComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotesButtonDeleteAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
