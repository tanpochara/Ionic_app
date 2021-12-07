import { Component, ElementRef, ViewChild } from '@angular/core';
import { DataProviderService } from '../data-provider.service';
import { Data } from 'model/data.model';
import { Observable } from 'rxjs';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  @ViewChild('lineCanvas', {static: true}) private lineCanvas: ElementRef;
  lineChart: any;
  x = [];
  y = [];
  public assignments$: Observable<Data>;
  public dset$: Observable<Data>;
  public selected: string;
  public count = 0;
  constructor(private provider: DataProviderService) {
    console.log('hello world');
    this.getAssignments();
    Chart.register(...registerables);
  }

  getAssignments(){
    this.assignments$ = this.provider.getAssignment();
    console.log(this.assignments$);
  }

  lineChartMethod() {
    this.lineChart = new Chart(this.lineCanvas.nativeElement, {
      type: 'line',
      data: {
        labels: this.y,
        datasets: [
          {
            label: 'number of student',
            fill: false,

            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: this.x,
            spanGaps: false,
          }
        ]
      }
    });
  }
  plotChart(){
    if(this.count>0){
      this.lineChart.destroy();
      this.x = [];
      this.y = [];
    }
    this.lineChartMethod();
    this.provider.getChart(this.selected,this.x,this.y,this.lineChart);
    this.count++;
  }

}
