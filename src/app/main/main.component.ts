import {Component, OnInit} from '@angular/core';
import {ApiService} from "../common/services/api.service";
import {TodoInterface} from "../common/interfaces/todo-interface";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  public selectedId: number | undefined;
  public todos: TodoInterface[];
  public todoDetail:TodoInterface;
  public open=false;
  public mode: boolean;

  constructor(private api: ApiService) {
  }

  ngOnInit(): void {
    this.getTodos();
  }

  public getTodos(){
    this.api.getAllTodos().subscribe((data) => {
      this.todos=data;
    })
  }

  public getTodosWithId($event: number) {
    this.api.getTodosByUserId($event).subscribe(data=>{
      this.todos=data;
    })
  }

  public selectTodo(id:number) {
    if(this.selectedId===id){
      this.selectedId=undefined;
      this.mode=true;
    }else{
      this.selectedId=id;
      this.todoDetail=this.todos[id];
      this.mode=false;
      this.open=true;
    }
  }
}
