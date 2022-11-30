import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-notes-input-add-itens',
  templateUrl: './notes-input-add-itens.component.html',
  styleUrls: ['./notes-input-add-itens.component.scss']
})
export class NotesInputAddItensComponent implements OnInit {

  @Output() public emitItemTaskList = new EventEmitter();

  public addItemTaskList: string = "";

  constructor() { }

  ngOnInit(): void {

  }

  public submitItemTaskList(){
    this.addItemTaskList = this.addItemTaskList.trim()

    if(this.addItemTaskList){
      this.emitItemTaskList.emit(this.addItemTaskList);
      this.addItemTaskList = ""
    }
    
  }
}
