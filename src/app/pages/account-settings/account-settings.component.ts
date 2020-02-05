import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common'

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  temaPredeterminado:string

  constructor(@Inject(DOCUMENT) private _document) { }

  ngOnInit() {
    this.temaPredeterminado = this._document.getElementById('tema').getAttribute('href')
  }
  cambiarColor(tema:string, link:any) {
    this.aplicarCheck(link)
    let temaActual = this._document.getElementById('tema').getAttribute('href')

    let partes = temaActual.split('/')
    partes[partes.length-1] = tema + '.css'
    let urlNueva = partes.join('/')

    this._document.getElementById('tema').setAttribute('href', urlNueva)
  }
  aplicarCheck(link:any) {
    let selectores:any = document.getElementsByClassName('selector')

    for (let ref of selectores) {
      ref.classList.remove('working')
    }

    link.classList.add('working')
  }

  temaPorDefecto() {
    let temaArray = this.temaPredeterminado.split('/')
    let tema = temaArray[temaArray.length-1]
    tema = tema.substr(0, tema.length-4)

    let selectores:any = document.getElementsByClassName('selector')

    for (let ref of selectores) {
      ref.classList.remove('working')
    }

    for (let ref of selectores) {
      if (ref.getAttribute('data-theme') === tema) {
        ref.classList.add('working')
        break
      } 
    }

    this._document.getElementById('tema').setAttribute('href', this.temaPredeterminado)
  }
}
