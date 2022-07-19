import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import ChartDataLabels from 'chartjs-plugin-datalabels';


@Component({
  selector: 'app-dashboard-piechart',
  templateUrl: './dashboard-piechart.component.html',
  styleUrls: ['./dashboard-piechart.component.css']
})
export class DashboardPiechartComponent implements OnInit {

  constructor() {


  }

  ngOnInit(): void {
    Chart.register(ChartDataLabels);
    const myChart = new Chart('mycanvas', {
      type: 'pie',
      data: {

        datasets: [{
          data: [40, 30, 20],
          backgroundColor: [
            '#FFB458',
            '#5DB3A8',
            '#F98A83'
          ],

        }]
      },
      options: {
        plugins: {
          datalabels: {
            formatter: (value, context) => {
              return 'Investor ' + (context.dataIndex + 1);
            },
            display: true,
            align: 'center',
            color: '#FFFFFF',
            font: {
              size: 14.5,
            }
          }
        }
      }


    }
    )

  }
}
