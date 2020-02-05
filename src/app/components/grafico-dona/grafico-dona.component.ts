import { Component, OnInit, Input } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styleUrls: ['./grafico-dona.component.scss']
})
export class GraficoDonaComponent implements OnInit {

  @Input() doughnutChartData: MultiDataSet
  @Input() doughnutChartLabels: Label[]
  @Input() doughnutChartType: ChartType
  @Input() leyenda: string

  constructor() { }

  ngOnInit() {
  }

}
