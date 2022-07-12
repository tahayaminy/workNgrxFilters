import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {TodoInterface} from "../interfaces/todo-interface";
import {Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public updateRefresh = new Subject();
  public deleteRefresh = new Subject();
  public postRefresh=new Subject();

  private headers = new HttpHeaders()
    .set('Content-Type', 'application/json');
  private apiUrl = 'https://jsonplaceholder.typicode.com/todos/';

  constructor(private http: HttpClient) {
  }

  public getAllTodos(): Observable<TodoInterface[]> {
    return this.http.get<TodoInterface[]>(this.apiUrl);
  }

  public getTodosByUserId(id: number): Observable<TodoInterface[]> {
    const params = new HttpParams()
      .set('userId', id);
    return this.http.get<TodoInterface[]>(this.apiUrl, {params});
  }

  public editTodo(data: { userId: number; title: string }, id: number) {
    this.http.patch(`${this.apiUrl}/${id}`, data, {headers: this.headers}).subscribe(data => {
      this.updateRefresh.next(data);
    });
  }

  public deleteTodo(id: number) {
    this.http.delete(`${this.apiUrl}/${id}`).subscribe(()=>{
      this.deleteRefresh.next(id);
    });
  }
  public postTodo(data:{userId: number; title: string}){
    this.http.post(this.apiUrl, {...data,completed:false}, {headers: this.headers}).subscribe(data => {
      this.postRefresh.next(data);
    });
  }
}
