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
  public data = [];
  public count = 0;
  constructor(private provider: DataProviderService) {}

  getData(){
    if(this.count === 0){
      this.provider.getDataInfi(this.searchBy,this.keyword,this.data,this.count,null);
    }else{
      this.provider.getDataInfi(this.searchBy,this.keyword,this.data,this.count,event);
    }
    this.count++;
    console.log('getData() called');
  }

}
