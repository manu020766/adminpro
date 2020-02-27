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
  cargando: boolean = false

  mostrarPaginacion: boolean = false

  constructor(public usuarioService: UsuarioService) { }

  ngOnInit() {
    this.cargarUsuarios()
  }

  cargarUsuarios() {
    this.cargando = true
    this.usuarioService.cargarUsuarios(this.desde).subscribe((resp:any) => {
      this.totalRegistros = resp.total
      this.usuarios = resp.usuarios
      this.cargando = false
      this.mostrarPaginacion = true
      console.log('usuarios', this.usuarios)
    })
  }

  cambiarDesde(valor:number) {
    let desde = this.desde + valor

    if (desde >= this.totalRegistros) return
    if (desde < 0) return

    this.desde += valor
    this.cargarUsuarios()
  }

  buscarUsuario(value: string) {

    if (value.length <= 0) {
      this.cargarUsuarios()
      return
    }
    this.mostrarPaginacion = false
    this.usuarioService.buscarUsuarios(value).subscribe(resp => {
      this.usuarios = resp
      this.totalRegistros = resp.length
    })
  }

  borrarUsuario(usuario:Usuario) {
    if (usuario._id === localStorage.getItem('id')) {
      alert('No puede borrarse a si mismo')
      return
    }

    this.usuarioService.borrarUsuario(usuario._id).subscribe(resp => {
      this.cargarUsuarios()
    })
  }

  guardarUsuario(usuario:Usuario) {
    this.usuarioService.actualizarUsuario(usuario).subscribe(console.log)
  }
}
