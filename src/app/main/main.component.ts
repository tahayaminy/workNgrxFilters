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
  public todos: TodoInterface[]=[];

  constructor(private api: ApiService) {
  }

  ngOnInit(): void {
    this.api.getAllTodos().subscribe((data) => {
      this.todos=data;
    })
  }

}
