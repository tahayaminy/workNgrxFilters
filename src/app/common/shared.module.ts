import { NgModule } from '@angular/core';
import { FilterComponent } from './components/filter/filter.component';
import {MatInputModule} from '@angular/material/input';
import { EditComponent } from './components/edit/edit.component';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    FilterComponent,
    EditComponent
  ],
  imports: [
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  exports: [
    FilterComponent,
    EditComponent
  ]
})
export class SharedModule { }
