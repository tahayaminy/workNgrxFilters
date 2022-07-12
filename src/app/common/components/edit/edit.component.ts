import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {TodoInterface} from "../../interfaces/todo-interface";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit,OnChanges {

  @Input() detail:TodoInterface | null;
  @Input() createMode: boolean=true;
  @Output() oncancel=new EventEmitter();

  public form:FormGroup;

  constructor(private fb:FormBuilder) { }

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

  public cancellation(){
    this.oncancel.emit(false)
  }

}
