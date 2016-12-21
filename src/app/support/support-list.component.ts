import { Component, OnInit, OnDestroy } from '@angular/core';
import { SupportService } from './support.service';
import { Subscription } from 'rxjs/Subscription';
import { Support } from '../shared/models/support.model';
import { FilterTextboxComponent } from '../shared/components/filter-textbox.component';



@Component({
  selector: 'ndp-support-list',
  templateUrl: './support-list.component.html',
})
export class SupportListComponent implements OnInit, OnDestroy {
  supports: Support[];
  filteredSupports: Support[];
  sub: Subscription;
  isSupportLoading: boolean= false;
   q: string = '';

  public totalItems: number;
  public currentPage: number = 1;
  public pageSize: number = 10;

  constructor(private supportService: SupportService) {}

search() {
  this.isSupportLoading = true;
  this.sub = this.supportService.getSupports({ q: this.q })
   .subscribe(
     res => {
        this.isSupportLoading = false;
        this.supports = this.filteredSupports = res;
        console.log(res);
        this.totalItems = this.supports.length;
     }
  );
}
  ngOnInit() {
 
    this.search();
  }



  filterChanged(data: string) {
    if (data && this.supports) {
        data = data.toUpperCase();
        //let props = ['title', 'content'];
        let props = ['title'];
        let filtered = this.supports.filter(item => {
            let match = false;
            for (let prop of props) {
                if (item[prop].toString().toUpperCase().indexOf(data) > -1) {
                  match = true;
                  break;
                }
            };
            return match;
        });
        this.filteredSupports = filtered;
        this.totalItems = this.filteredSupports.length;
    } else {
      this.filteredSupports = this.supports;
    }
  }

  ngOnDestroy() {
   if (this.sub) {
      this.sub.unsubscribe();
    }
  }
}
