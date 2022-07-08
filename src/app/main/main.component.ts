import { Component, OnInit } from '@angular/core';
import {ApiService} from "../common/services/api.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.api.getAllTodos().subscribe((data)=>{
      console.table(data)
    })
  }

}
