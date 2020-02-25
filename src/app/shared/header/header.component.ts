import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {

  constructor(private usuarioService: UsuarioService, private router:Router) { }

  ngOnInit() {
  }

  logout() {
    this.usuarioService.logout()
    this.router.navigateByUrl('login')
  }

}
