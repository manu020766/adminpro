import { Component, OnInit } from '@angular/core'
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { Usuario } from '../models/usuario.model'
import { UsuarioService } from '../services/usuario/usuario.service'
import { Router } from '@angular/router'

declare function init_plugins()



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./login.component.css']
})
export class RegisterComponent implements OnInit {
  
  CARACTERES_PASSWORD = 3
  forma: FormGroup
  constructor(
    private fb:FormBuilder,
    private usuarioService:UsuarioService,
    private router:Router
  ) { }

  ngOnInit() {
    init_plugins()

    this.forma = this.fb.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(this.CARACTERES_PASSWORD)]],
      password2: ['', [Validators.required, Validators.minLength(this.CARACTERES_PASSWORD)]],
      condiciones: ['', Validators.requiredTrue]
    }, { validators: this.passwordIguales })
  }

  passwordIguales(group: FormGroup) {
    return group.get('password').value === group.get('password2').value
       ? null : {'passwordNoIguales': true};
 }

  get nombreErrorRequerido() {
    return this.forma.get('nombre').hasError('required') && this.forma.get('nombre').touched
  }
  get mailErrorRequerido() {
    return this.forma.get('email').hasError('required') && this.forma.get('email').touched
  }
  get emailErrorIncorrecto() {
    return this.forma.get('email').hasError('email') && this.forma.get('email').touched
  }
  get passwordRequerido() {
    return this.forma.get('password').hasError('required') && this.forma.get('password').touched
  }
  get passwordMinlength() {
    return this.forma.get('password').hasError('minlength') && this.forma.get('password').touched
  }
  get password2Requerido() {
    return this.forma.get('password2').hasError('required') && this.forma.get('password2').touched
  }
  get password2Minlength() {
    return this.forma.get('password2').hasError('minlength') && this.forma.get('password2').touched
  }
  get password2NoIguales() {
    return this.forma.hasError('passwordNoIguales') && this.forma.get('password2').touched
  }
  get condicionesRequerido() {
    return this.forma.get('condiciones').hasError('required') && this.forma.get('condiciones').touched
  }

  onSubmit() {
    if (this.forma.valid) {
      const usuario = new Usuario(
        this.forma.get('nombre').value,
        this.forma.get('email').value,
        this.forma.get('password').value
      )
      this.usuarioService.createUsuario(usuario).subscribe( res => console.log(res))
      this.router.navigate(['/login'])
    } else {
      console.log('comprobando todos los campos')
      Object.keys(this.forma.controls).forEach(field => { // Recorro todos los controles del formulario
        const control = this.forma.get(field)             // selecciono cada control
        control.markAsTouched()                           // marco cada control para obligar a disparar la validación/es
      })

      // if(!this.forma.value.condiciones) Swal.fire('Aviso','Es requerido aceptar los terminos','warning')
      if(!this.forma.value.condiciones) alert("Aviso => Es requerido aceptar los terminos")
    }
  }
}
