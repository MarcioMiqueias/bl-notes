import { Component, DoCheck, OnInit } from '@angular/core';
import { first, last } from 'rxjs';

//Interface
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.scss']
})
export class NotesListComponent implements DoCheck {

  public taskList: Array<TaskList> = JSON.parse(localStorage.getItem("list") || '[]');

  ngDoCheck(){
    this.setLocalStorage()
    
  }

  constructor() { }

  

  public setEmitTaskList(event: string){
    this.taskList.push({task: event, checked: false});
  }

  public deleteItemTaskList(event: number){
    this.taskList.splice(event, 1);
  }

  public deleteAllTaskList(){
    const confirm = window.confirm("Do you want to delete all?")
    if(confirm){
      this.taskList = [];  
    }
  }

  public validationInput(event: string, index: number){
    if(!event.length){
      const confirm = window.confirm("Do you want to delete?");
      if(confirm){
        this.deleteItemTaskList(index);
      }
    }
  }

  public setLocalStorage(){
    if(this.taskList){
      this.taskList.sort((first, last) => Number(first.checked) - Number(last.checked));
      localStorage.setItem("list", JSON.stringify(this.taskList))
    }
  }
}
