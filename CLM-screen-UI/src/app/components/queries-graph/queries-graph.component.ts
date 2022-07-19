import { Component, OnInit } from '@angular/core';
import { tick } from '@angular/core/testing';
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

          borderWidth: 1
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
            // grace: '8%'
            // min:0,
            // max:14,


          }
        },
        plugins: {
          title: {
            display: true,
            text: 'Nature of Queries',
            align: 'start',
            font: {
              size: 18,

            }
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
