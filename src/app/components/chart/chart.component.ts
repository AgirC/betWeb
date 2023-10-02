import { AfterViewInit, Component, ElementRef, Input, SimpleChanges, ViewChild } from '@angular/core';
import { Bet } from 'src/app/models/bet.model';
import Chart from 'chart.js/auto';
import { TranslateService } from '@ngx-translate/core';

/**
 * This component is used to inicialize and display a chart with the last 5 bets of the user
 */
@Component({
  selector: 'chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements AfterViewInit {

  /**
   * This is an array with all the bets made by the user
   */
  @Input() bets!: Bet[];

  @ViewChild('barCanvas') barCanvas: ElementRef | undefined;

  barChart: any;

  dataChart: any;

  constructor(
    private translate: TranslateService
  ) { }

  /**
   * We init chart on after view init event
   */
  ngAfterViewInit(): void {
    this.initChart();
  }

  /**
   * We update chart on on change event
   */
  ngOnChanges(changes: SimpleChanges) {
    this.updateChart();
  }

  /**
   * the updateChart method is used to update the chart when data change
   */
  updateChart(): void {
    this.initChartData();
    if (this.barChart) {
      this.barChart.data = this.dataChart;
      this.barChart.update();
    }
  }

  /**
   * In this method we init the data need for displaying the last 5 bets in chart
   */
  initChartData(): void {
    let initdata = {
      labels: [''],
      datasets: [
        {
          label: this.translate.instant('chart.result'),
          data: [0],
          backgroundColor: [''],
          borderColor: [''],
          borderWidth: 1,
        },
      ],
    };
    const lastFiveBets: Bet[] = this.bets.slice(-5);
    const labels = lastFiveBets.map(bet => {
      return bet.betResult.toString() || '';
    });
    const data = lastFiveBets.map(bet => {
      return bet.betResult;
    });
    const colors = lastFiveBets.map(bet => {
      let betColor = 'rgba(255, 99, 132, 0.2';
      if (bet.betResult > 0) {
        betColor = 'rgba(0, 128, 0, 0.2';
      }
      return betColor;
    });
    const borderColors = lastFiveBets.map(bet => {
      let betColor = 'rgba(255, 99, 132, 1';
      if (bet.betResult > 0) {
        betColor = 'rgba(0, 128, 0, 1';
      }
      return betColor;
    });
    initdata.labels = labels;
    initdata.datasets[0].data = data;
    initdata.datasets[0].backgroundColor = colors;
    initdata.datasets[0].borderColor = borderColors;
    this.dataChart = initdata;
  }

  /**
   * in this method we init the config variables of the chart
   */
  initChart() {
    this.initChartData();
    this.barChart = new Chart(this.barCanvas?.nativeElement, {
      type: 'bar',
      data: this.dataChart,
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Last 5 bets'
          }
        }
      }
    });
  }


}
