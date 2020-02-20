import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidatorFn, AbstractControl } from '@angular/forms';

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
    private fb:FormBuilder
  ) { }

  ngOnInit() {
    init_plugins()

    this.forma = this.fb.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(this.CARACTERES_PASSWORD)]],
      password2: ['', [Validators.required, Validators.minLength(this.CARACTERES_PASSWORD), this.sonDistintos('password') ]],
      condiciones: ['', Validators.requiredTrue]
    })
  }

  sonDistintos(campo1:string): ValidatorFn {

    return (control: AbstractControl): { [key: string]: any } => {

      const password2 = control.value

      const sonDistintos = control.root.value[campo1] !== password2;

      return sonDistintos ? {'sondistintos': {sonDistintos}}: null;
    }
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
  get password2SonDistintos() {
    return this.forma.get('password2').touched && this.forma.get('password2').hasError('sondistintos')
  }
  get condicionesRequerido() {
    return this.forma.get('condiciones').hasError('required') && this.forma.get('condiciones').touched
  }

  onSubmit() {
    if (this.forma.valid) {
      console.log('registrar usuario')
    } else {
      Object.keys(this.forma.controls).forEach(field => { // Recorro todos los controles del formulario
        const control = this.forma.get(field)             // selecciono cada control
        control.markAsTouched()                           // marco cada control para obligar a disparar la validación/es
      })
    }
  }
}
