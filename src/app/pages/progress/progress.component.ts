import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {

  porcentaje:number = 0
  constructor() { }

  ngOnInit() {
  }
  varioEn(numero:number) {
    this.porcentaje = +this.porcentaje + numero

    if (this.porcentaje > 100) this.porcentaje = 100
    if (this.porcentaje < 0) this.porcentaje = 0
  }


}
