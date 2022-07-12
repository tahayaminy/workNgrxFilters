import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import {RouterModule, Routes} from "@angular/router";
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from "@angular/material/button";
import {SharedModule} from "../common/shared.module";
const routes: Routes=[
  {path:'',component:MainComponent}
]

@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatIconModule,
    RouterModule.forChild(routes),
    MatButtonModule
  ]
})
export class MainModule { }
