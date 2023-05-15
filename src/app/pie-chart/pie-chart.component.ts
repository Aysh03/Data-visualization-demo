import { Component } from '@angular/core';
import { ChartConfiguration, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss'],
})
export class PieChartComponent {
  
  pieChartData = {
    labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    datasets: [
      {
        data: [89, 34, 43, 54, 28, 74, 93],
        label: 'Sales Percent',
        backgroundColor: [
          'rgba(255,0,25,0.7)',
          'rgba(167,125,78,0.7)',
          'rgba(0,255,25,0.7)',
          'rgba(0,25,255,0.7)',
          'rgba(67,25,255,0.7)',
          'rgba(67,25,78,0.7)',
          'rgba(67,255,170,0.7)',
        ],
      },
    ],
  };

  pieChartOptions = {
    responsive: false,
  };
}
