import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css'],
})
export class ChartsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    chart: {
      type: 'column',
    },
    title: {
      text: 'Monthly Open Incidents',
    },
    subtitle: {
      text: '2021',
    },
    xAxis: {
      categories: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ],
      crosshair: true,
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Incidents',
      },
    },
    tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat:
        '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
      footerFormat: '</table>',
      shared: true,
      useHTML: true,
    },
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0,
      },
    },
    series: [
      {
        color: '#DE3618',
        type: 'column',
        name: 'High',
        data: [49, 71, 106, 129, 144, 176, 135, 148, 216, 194, 95, 54],
      },
      {
        color: '#F49342',
        type: 'column',
        name: 'Medium',
        data: [83, 78, 98, 93, 106, 84, 105, 104, 91, 83, 106, 92],
      },
      {
        color: '#EEC200',
        type: 'column',
        name: 'Low',
        data: [48, 38, 39, 41, 47, 48, 59, 59, 52, 65, 59, 51],
      },
      {
        color: '#006FBB',
        type: 'column',
        name: 'Total',
        data: [42, 33, 34, 39, 52, 75, 57, 60, 47, 39, 46, 51],
      },
    ],
  };
}
