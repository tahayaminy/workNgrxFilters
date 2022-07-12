import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  public filter: number | undefined;

  @Output()
  applyFilter= new EventEmitter();
  @Output()
  clearFilter= new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  public filterFunction() {
    if(this.filter){
      this.applyFilter.emit(this.filter);
    }
  }

  public clear() {
    this.clearFilter.emit();
  }
}
