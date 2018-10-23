import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-abs-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  debitCreditBarChartType: string;
  debitCreditBarChartLegend: boolean;
  debitCreditBarChartOptions: any;
  debitCreditBarChartLabels: string[];
  debitCreditBarChartDataSets: Array<{
    data: Array<number[]> | number[];
    label: string;
  }>;

  constructor() {
    this.debitCreditBarChartType = 'bar';
    this.debitCreditBarChartLegend = true;
    this.debitCreditBarChartOptions = {
      scaleShowVerticalLines: false,
      responsive: true
    };
    this.debitCreditBarChartLabels = ['2016', '2017', 'YTD 2018'];
    this.debitCreditBarChartDataSets = [
      { data: [15000, 12000, 7600], label: 'Debit' },
      { data: [65000, 88000, 76000], label: 'Credit' }
    ];
  }

  ngOnInit() {}

  debitCreditBarChartHovered(event) {}

  debitCreditBarChartClicked(event) {}
}
