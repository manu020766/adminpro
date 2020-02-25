import { Component, OnInit } from '@angular/core'
import { SidebarService } from 'src/app/services/shared/sidebar.service'
import { UsuarioService } from 'src/app/services/usuario/usuario.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: []
})
export class SidebarComponent implements OnInit {

  imagen:string
  usuarioNombre:string
  constructor(
                private sidebar: SidebarService,
                private usuarioService: UsuarioService,
                private router:Router
  ) { }

  ngOnInit() {

    this.imagen = '../assets/images/users/thalia.jpg'

    const imagenGoogle = this.usuarioService.getImagenGoogle()
    if (imagenGoogle) this.imagen = '../assets/images/users/manu.png'

    this.usuarioNombre = this.usuarioService.getUsuarioNombre()
  }

  logout() {
    this.usuarioService.logout()
    this.router.navigateByUrl('login')
  }

}
