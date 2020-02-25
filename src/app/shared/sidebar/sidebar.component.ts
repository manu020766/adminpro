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

  constructor(
                private sidebar: SidebarService,
                private usuarioService: UsuarioService,
                private router:Router
  ) { }

  ngOnInit() {
  }

  logout() {
    this.usuarioService.logout()
    this.router.navigateByUrl('login')
  }

}
