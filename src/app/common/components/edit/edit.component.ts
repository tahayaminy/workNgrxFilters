import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {TodoInterface} from "../../interfaces/todo-interface";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ApiService} from "../../services/api.service";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit,OnChanges {

  @Input() detail:TodoInterface | null;
  @Input() createMode: boolean;
  @Output() oncancel=new EventEmitter();

  public form:FormGroup;

  constructor(private fb:FormBuilder,private api:ApiService) { }

  ngOnChanges() {
    this.createForm();
  }
  ngOnInit(): void {
    this.createForm();
  }

  public createForm(){
    this.form=this.fb.group({
      userId:[this.detail?.userId ?? '',Validators.required],
      title:[this.detail?.title ?? '',Validators.required]
    })
    if(this.createMode){
      this.form.reset();
    }
  }
  public editTodo(){
    this.api.editTodo({userId:this.form.get('userId')?.value,title:this.form.get('title')?.value},this.detail!.id!);
    this.form.reset()
  }

  public cancellation(){
    this.oncancel.emit(false)
  }

  public deleteTodo() {
    this.api.deleteTodo(this.detail!.id!);
  }

  public postTodo() {
    this.api.postTodo({userId:this.form.get('userId')?.value,title:this.form.get('title')?.value});
    this.form.reset();
  }
}
