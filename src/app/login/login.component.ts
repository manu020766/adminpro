import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router'
import { Usuario } from '../models/usuario.model'
import { FormGroup } from '@angular/forms';
import { UsuarioService } from '../services/usuario/usuario.service';

declare function init_plugins()   //hace referencia a las utilidades que incorporamos en el index.html
declare const gapi: any           //google signIn - hace referencia a google platform que incorporamos en el index.html

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [ './login.component.css' ]
})
export class LoginComponent implements OnInit {

  // @ViewChild('usuarioForm', { static:false }) form:any //Esta es una forma de hacer referencia al formulario

  usuario:Usuario
  recuerdame:boolean

  auth2: any  // google signIn

  constructor(
    public router:Router,
    public usuarioService: UsuarioService,
    public ngZone: NgZone
    ) { }

  ngOnInit() {
    init_plugins()
    this.googleInit()

    this.usuario = new Usuario('','','')
    this.recuerdame = false
  }

  googleInit() {
    gapi.load('auth2', () => {
      this.auth2 = gapi.auth2.init({
        client_id: '487557979160-kcoi5lrsrh3ur5g86j2oilf0v0sebfag.apps.googleusercontent.com',
        cookiepolicy: 'single_host_origin',
        scope: 'profile email'
      })
      this.attachSignin(document.getElementById('btnGoogle'))
    })
  }
  attachSignin(element) {
    this.auth2.attachClickHandler(element, {}, googleUser => {
      // let profile = googleUser.getBasicProfile()
      // console.log(profile)
      let token = googleUser.getAuthResponse().id_token
      // console.log('token: ', token)

      this.usuarioService.loginGoogle(token)
        .subscribe(() => this.ngZone.run(() => this.router.navigate(['dashboard']))   
      )
    })
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

    let usuario = new Usuario(null, usuarioForm.controls['email'].value, usuarioForm.controls['password'].value)  

    this.usuarioService.login(usuario, false)
      .subscribe(
        res => {
          console.log('RESPUESTA: ', res)
          this.router.navigate(['dashboard'])
        },
        error => {
          alert(`Acceso Denegado => ${ error['error'].mensaje }`)

          usuarioForm.reset()
        }
      )   
  }
}
