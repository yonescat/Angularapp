import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ndp-filter-textbox',
  template: `
    <form class="form-inline" (ngSubmit)="filterChanged($event)">
        <div class="form-group">
          <input type="text" name="filter" class="form-control" [(ngModel)]="model.filter" />
        </div>
        <button type="submit" class="btn btn-outline-info">{{'search'}}</button>
    </form>
  `
})
export class FilterTextboxComponent {

  
    model: { filter: string } = { filter: null };
    
    @Output()
    changed: EventEmitter<string> = new EventEmitter<string>();

    filterChanged(event: any) {
      event.preventDefault();
      this.changed.emit(this.model.filter); //Raise changed event
    }
}
