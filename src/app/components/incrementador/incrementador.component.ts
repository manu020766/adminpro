import { Component, Output, EventEmitter, Input, ViewChild, ElementRef } from '@angular/core'

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent {
  @ViewChild('txtProgress', {static:false}) txtProgress: ElementRef

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

    this.txtProgress.nativeElement.value = +this.porcentaje

    this.porcentajeActual.emit(this.porcentaje)
    this.txtProgress.nativeElement.focus()
  }
}
