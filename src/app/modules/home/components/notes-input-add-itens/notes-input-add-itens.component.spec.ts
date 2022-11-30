import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesInputAddItensComponent } from './notes-input-add-itens.component';

describe('NotesInputAddItensComponent', () => {
  let component: NotesInputAddItensComponent;
  let fixture: ComponentFixture<NotesInputAddItensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotesInputAddItensComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotesInputAddItensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
