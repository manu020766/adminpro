import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styles: []
})
export class UsuariosComponent implements OnInit {

  usuarios: Usuario[] = []
  desde:number = 0
  totalRegistros:number = 0

  constructor(public us: UsuarioService) { }

  ngOnInit() {
    this.cargarUsuarios()
  }

  cargarUsuarios() {
    this.us.cargarUsuarios().subscribe((resp:any) => {
      this.totalRegistros = resp.total
      this.usuarios = resp.usuarios
    })
  }
}
