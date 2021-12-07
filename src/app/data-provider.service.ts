import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Data } from 'model/data.model';

@Injectable({
  providedIn: 'root'
})
export class DataProviderService {

  constructor(public http: HttpClient) { }

  getDataInfi(searchBy: string, keyword: string){
    return this.http.get<Data>('http://1606-35-245-121-13.ngrok.io/get_data?searchBy='+searchBy+'&keyword='+keyword);
  }
}
