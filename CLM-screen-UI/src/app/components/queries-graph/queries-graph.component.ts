import { Component, OnInit } from '@angular/core';
import Chart, { Ticks } from 'chart.js/auto';
import ChartDataLabels from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-queries-graph',
  templateUrl: './queries-graph.component.html',
  styleUrls: ['./queries-graph.component.css']
})
export class QueriesGraphComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    Chart.register(ChartDataLabels);
    const myChart = new Chart('mycanvas', {
      type: 'bar',
      data: {
        labels: ['Nature 1 Query', 'Nature 2 Query', 'Nature 3 Query', 'Nature 4 Query', 'Nature 5 Query'],
        datasets: [{
          data: [12, 9, 10, 5, 9],
          backgroundColor: [
            '#EF878D'
          ],
          borderWidth: 1,
         
          
          barPercentage: 0.9,
          
        }]
      },
      options: {
        
        indexAxis: 'y',
        scales: {

          yAxes: {

            beginAtZero: true,
            grid: {
              display: false,
            },


          },
          xAxes: {
            
            display: false,
            grid: {
              display: false,
            },
            grace: '1'
            


          }
        },
        plugins: {
          title: {
            display: true,
            text: 'Nature of Queries',
            align: 'start',
            font: {
              size: 18,
              weight:'500'
            },
            color: '#313942',
          },
          datalabels: {
            anchor: 'end',
            align: 'right',

            formatter: Math.round,
            font: {
              weight: 'normal',
            },
            color: '#747D87',
          },
          legend: {
            display: false
          }
        }
      },
    })

  }

}
