import { Component, Output, EventEmitter, Input } from '@angular/core'

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent {
  @Input() leyenda:string = 'leyenda'
  @Output() porcentajeActual = new EventEmitter()

  porcentaje:number = 0

  varioEn(numero:number) {
    this.porcentaje = +this.porcentaje + numero
    this.EmiteNuevoPorcentaje()
  }

  EmiteNuevoPorcentaje() {
    if (this.porcentaje > 100) this.porcentaje = 100
    if (this.porcentaje < 0) this.porcentaje = 0

    this.porcentajeActual.emit(this.porcentaje)
  }
}
