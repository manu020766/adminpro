import { Component, OnInit } from '@angular/core'
import { SidebarService } from 'src/app/services/shared/sidebar.service'
import { UsuarioService } from 'src/app/services/usuario/usuario.service'
import { Router } from '@angular/router'
import { Usuario } from 'src/app/models/usuario.model'

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: []
})
export class SidebarComponent implements OnInit {

  imagen:string
  usuario:Usuario
  constructor(
                private sidebar: SidebarService,
                private usuarioService: UsuarioService,
                private router:Router
  ) { }

  ngOnInit() {
    this.usuario = this.usuarioService.getUsuario()

    this.imagen = '../assets/images/users/thalia.jpg'

    if (this.usuario.google) this.imagen = '../assets/images/users/manu.png'
  }

  logout() {
    this.usuarioService.logout()
    this.router.navigateByUrl('login')
  }

}
