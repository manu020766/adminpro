import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  usuario: Usuario
  formulario: FormGroup
  constructor(
        private usuarioService: UsuarioService,
        private fb:FormBuilder
  ) { }

  ngOnInit() {
    this.usuario = this.usuarioService.getUsuario()
    
    
    this.formulario = this.fb.group({
      nombre: [this.usuario.nombre,[Validators.required]],
      email: [{ value: this.usuario.email, disabled: this.usuario.google },[Validators.required, Validators.email]],
    })
  }

  submit() {
    console.log(this.formulario.value)
  }

}
