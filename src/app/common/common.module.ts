import { NgModule } from '@angular/core';
import { FilterComponent } from './components/filter/filter.component';
import {MatInputModule} from '@angular/material/input';
import { EditComponent } from './components/edit/edit.component';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    FilterComponent,
    EditComponent
  ],
    imports: [
        MatInputModule,
        MatButtonModule,
        FormsModule
    ],
  exports: [
    FilterComponent,
    EditComponent
  ]
})
export class CommonModule { }
