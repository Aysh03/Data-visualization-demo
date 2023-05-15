import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { DoughnutChartComponent } from './doughnut-chart/doughnut-chart.component';
import { VisualizerComponent } from './visualizer/visualizer.component';

const routes: Routes = [
  { path: 'home', component: VisualizerComponent },

  { path: 'line', component: LineChartComponent },

  { path: 'pie', component: PieChartComponent },

  { path: 'doughnut', component: DoughnutChartComponent },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  { path: '**', component: VisualizerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
