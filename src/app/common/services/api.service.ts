import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {TodoInterface} from "../interfaces/todo-interface";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService{
  private apiUrl='https://jsonplaceholder.typicode.com/todos/';
  constructor(private  http:HttpClient) {}

  getAllTodos():Observable<TodoInterface[]>{
    return this.http.get<TodoInterface[]>(this.apiUrl)
  }

}
