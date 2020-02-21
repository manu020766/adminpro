import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router'
import { Usuario } from '../models/usuario.model'
import { FormGroup } from '@angular/forms';

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
  constructor(public router:Router) { }

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
    } else this.router.navigate(['dashboard'])
  }

}
