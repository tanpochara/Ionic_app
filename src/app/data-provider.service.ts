import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Data } from 'model/data.model';

@Injectable({
  providedIn: 'root'
})
export class DataProviderService {
  private url = 'http://89e8-34-74-240-93.ngrok.io';
  constructor(public http: HttpClient) { }

  getDataInfi(searchBy: string, keyword: string){
    console.log('getDataInfi() called');
    return this.http.get<Data>(this.url+'/get_data?searchBy='+searchBy+'&keyword='+keyword);
  }

  postData(assignment: string,id: string, q1: string,q2: string,q3: string,q4: string,q5: string,comment: string){
    console.log('finish upload');
    // eslint-disable-next-line max-len
    this.http.get(this.url+'/insert?student_id='+id+'&Q1='+q1+'&Q2='+q2+'&Q3='+q3+'&Q4='+q4+'&Q5='+q5+'&comment='+comment+'&Assignment'+assignment).subscribe(
      data=> {
        // eslint-disable-next-line @typescript-eslint/dot-notation
        for (const x of data['data']){
          console.log(x);
        }
      }
    );
  }

  getAssignment(){
    return this.http.get<Data>(this.url+'/assignments');
  }

  getChart(assignment: string, x: any, y: any, lineChart: any){
    this.http.get(this.url+'/chart?assignment='+assignment).subscribe( data=> {
      // eslint-disable-next-line @typescript-eslint/dot-notation
      for (const item of data['data']){
          // eslint-disable-next-line @typescript-eslint/dot-notation
          x.push(item['Assignment']);
          // eslint-disable-next-line @typescript-eslint/dot-notation
          y.push(item['total_score']);
          lineChart.update(0);
        }
      }
    );
  }
}
