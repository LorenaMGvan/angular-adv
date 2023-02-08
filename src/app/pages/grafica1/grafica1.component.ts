import { Component } from '@angular/core';
import { ChartData, ChartEvent, ChartType, Color } from 'chart.js';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component {
  public label1: string[] = ['Pan', 'Refresco', 'Tacos'];
  public data1: ChartData<'doughnut'> = {
    labels: this.label1,
    datasets: [
      { data: [ 350, 450, 100 ],
        backgroundColor: [ '#6857E6', '#009FEE', '#F02059' ],
        //hoverBackgroundColor: [ '#6857E6', '#009FEE', '#F02059' ]
      }
    ]
  };
}
