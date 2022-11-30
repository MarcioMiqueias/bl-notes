import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

//Components
import { HeaderComponent } from './components/header/header.component';
import { NotesButtonDeleteAllComponent } from './components/notes-button-delete-all/notes-button-delete-all.component';
import { NotesInputAddItensComponent } from './components/notes-input-add-itens/notes-input-add-itens.component';
import { NotesListComponent } from './components/notes-list/notes-list.component';

//Page
import { HomeComponent } from './pages/home/home.component';




@NgModule({
  declarations: [
    HeaderComponent,
    NotesButtonDeleteAllComponent,
    NotesInputAddItensComponent,
    NotesListComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class HomeModule { }
