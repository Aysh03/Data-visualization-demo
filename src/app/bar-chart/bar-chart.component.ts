import { Component } from '@angular/core';
import { ChartConfiguration, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent {


  title = 'ng2-charts-demo';

  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    datasets: [
      {
        data: [89, 34, 43, 54, 28, 74, 93],
        label: 'Sales Percent',
   
        backgroundColor: '#f88406',
      },
    ],
  };
  public barChartOptions: ChartOptions<'bar'> = {
    responsive: false,
  };
  public barChartLegend = true;

}
