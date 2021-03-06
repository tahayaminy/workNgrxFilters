import {Component, OnInit} from '@angular/core';
import {ApiService} from "../common/services/api.service";
import {TodoInterface} from "../common/interfaces/todo-interface";
import {map} from "rxjs";

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
  public selectedIndex:number | undefined;

  constructor(private api: ApiService) {
  }

  ngOnInit(): void {
    this.getTodos();
    this.api.updateRefresh.subscribe(data=>{
      this.refresh(data as TodoInterface);
    });
    this.api.deleteRefresh.subscribe(()=>{
      this.delete();
    })
    this.api.postRefresh.subscribe(data=>{
      this.post(data as TodoInterface);
    })
  }

  public getTodos(){
    this.api.getAllTodos().subscribe((data) => {
      this.todos=data;
    })
  }

  public getTodosWithId($event: number) {
    let filteredTodos:TodoInterface[]=[];
    this.api.getAllTodos().pipe(map((todos:TodoInterface[])=>todos.map(todo=>{
      if(todo.userId===$event){
          filteredTodos.push(todo);
        }
    }))).subscribe(()=>{
      this.todos=filteredTodos;
    })
    // let filteredTodo:TodoInterface[]=[];
    // this.todos.map(todo=>{
    //   if(todo.userId===$event){
    //     filteredTodo.push(todo);
    //   }
    // })
    // this.todos=filteredTodo;
  }

  public selectTodo(id:number|undefined) {
    if(this.selectedId===id){
      this.selectedId=undefined;
      this.mode=true;
      this.todos.map((todo,index)=>{
        if(todo.id===this.selectedId){
          this.selectedIndex=index;
        }
      })
    }else{
      this.selectedId=id;
      this.todoDetail=this.todos[id! - 1];
      this.mode=false;
      this.open=true;
      this.selectedIndex=undefined;
    }
  }

  public refresh(data:TodoInterface) {
    this.todos[data!.id! - 1]=data;
  }
  public delete() {
    this.todos.splice(this.selectedIndex!,1);
    this.selectTodo(undefined);
    this.open=false;
  }
  public post(data:TodoInterface){
    this.todos.push(Object.assign(data,{id:this.todos.length+1}));
  }

  public checkbox(id: number) {
    console.log(this.todos[id])
    this.todos[id].completed=!this.todos[id].completed;
    console.log(this.todos[id])
  }
}
