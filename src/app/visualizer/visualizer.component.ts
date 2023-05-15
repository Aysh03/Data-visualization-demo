import { Component } from '@angular/core';

@Component({
  selector: 'app-visualizer',
  templateUrl: './visualizer.component.html',
  styleUrls: ['./visualizer.component.scss']
})
export class VisualizerComponent {

  // line: string = 'Line Chart';
  // pie: string = 'Pie Chart';
  // bar: string = 'Bar Chart';
  // doughnut: string = 'Doughnut Chart';
  

  currentChart: string = 'line';



  changeChart(chartType: string): void {
    this.currentChart = chartType;
  }
  


  isChartActive(chartType: string): boolean {
    return this.currentChart === chartType;
  }
  


}
