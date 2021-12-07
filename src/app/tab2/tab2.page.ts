import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { DataProviderService } from '../data-provider.service';
import { Data } from 'model/data.model';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  public searchBy: string;
  public keyword: string; //ใช้ได้
  public data$: Observable<Data>;
  constructor(private provider: DataProviderService) {}

  getData(){
    this.data$ = this.provider.getDataInfi(this.searchBy,this.keyword);
  }

}
