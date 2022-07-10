import { NgModule } from '@angular/core';
import { FilterComponent } from './components/filter/filter.component';
import {MatInputModule} from '@angular/material/input';
import { EditComponent } from './components/edit/edit.component';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    FilterComponent,
    EditComponent
  ],
  imports: [
    MatInputModule,
    MatButtonModule
  ],
  exports: [
    FilterComponent,
    EditComponent
  ]
})
export class CommonModule { }
