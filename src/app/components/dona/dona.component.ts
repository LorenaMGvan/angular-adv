import { Component, Input } from '@angular/core';
import { ChartData, ChartEvent, ChartType, Color } from 'chart.js';


@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent {
  @Input()  title: string =  'Sin título';
// Doughnut
  @Input('labels') doughnutChartLabels: string[] = [ 'Etiqueta A', 'Etiqueta B', 'Etiqueta C' ];
  // @Input('data') doughnutChartData: MultiDataSet = [];

  @Input('data') doughnutChartData: ChartData<'doughnut'> = {
  labels: this.doughnutChartLabels,
  datasets: [
    { data: [10,50,150],
     //aqui se aplican los colores que va a tener la gráfica
     backgroundColor:['#9E120E','#FF5800','#FFB414']
   },
  ]
};

// public colors: Color[] = [
//   '#9E120e',
//   '#ff5800',
//   '#ffb414'
// ];
public doughnutChartType: ChartType = 'doughnut';

// events
public chartClicked({ event, active }: { event: ChartEvent, active: {}[] }): void {
  console.log(event, active);
}

public chartHovered({ event, active }: { event: ChartEvent, active: {}[] }): void {
  console.log(event, active);
}
}
