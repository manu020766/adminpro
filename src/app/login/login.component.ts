import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { Usuario } from '../models/usuario.model'
import { FormGroup } from '@angular/forms';
import { UsuarioService } from '../services/usuario/usuario.service';

declare function init_plugins()

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [ './login.component.css' ]
})
export class LoginComponent implements OnInit {

  // @ViewChild('usuarioForm', { static:false }) form:any //Esta es una forma de hacer referencia al formulario

  usuario:Usuario
  recuerdame:boolean
  constructor(public router:Router, private usuarioService: UsuarioService) { }

  ngOnInit() {
    init_plugins()

    this.usuario = new Usuario('','','')
    this.recuerdame = false
  }

  // ingresar() {                                       // De esta forma funcionaria con la referencia al viewChild
  //   console.log('Formulario: ', this.form.valid)
  //   console.log('Usuario: ',this.usuario)
  //   console.log('Recuerdame: ', this.recuerdame)

  //   if (this.form.invalid) {
  //     this.form.controls['email'].markAsTouched()
  //     this.form.controls['password'].markAsTouched()
  //   } else this.router.navigate(['dashboard'])
  // }

  ingresar(usuarioForm:FormGroup) {
    console.log('Formulario: ', usuarioForm.valid)
    console.log('Usuario: ',this.usuario)
    console.log('Recuerdame: ', this.recuerdame)

    if (usuarioForm.invalid) {
      usuarioForm.controls['email'].markAsTouched()
      usuarioForm.controls['password'].markAsTouched()
    }
    this.usuarioService.loginUsuario(this.usuario)
      .subscribe(
        res => {
          console.log('RESPUESTA: ', res)
          this.router.navigate(['dashboard'])
        },
        error => {
          // console.log('res', error['error'].ok)
          // console.log('res', error['error'].mensaje)

          alert(`Acceso Denegado => ${ error['error'].mensaje }`)

          usuarioForm.reset()
        }
      )   
  }
}
