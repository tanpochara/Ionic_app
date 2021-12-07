import { Component } from '@angular/core';
import { Data } from 'model/data.model';
import { Observable } from 'rxjs';
import { DataProviderService } from '../data-provider.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  public assignment: string;
  public id: string;
  public q1: string;
  public q2: string;
  public q3: string;
  public q4: string;
  public q5: string;
  public comment: string;
  public unused$: Observable<Data>;
  constructor(private provider2: DataProviderService) {}

  insert(){
    // eslint-disable-next-line max-len
    this.provider2.postData(this.assignment,this.id,this.q1,this.q2,this.q3,this.q4,this.q5,this.comment);
    console.log('inserting');
  }

}
