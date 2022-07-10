import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import {RouterModule, Routes} from "@angular/router";
import{CommonModule as myCommonModule} from '../common/common.module'
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from "@angular/material/button";
const routes: Routes=[
  {path:'',component:MainComponent}
]

@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    myCommonModule,
    MatIconModule,
    RouterModule.forChild(routes),
    MatButtonModule
  ]
})
export class MainModule { }
