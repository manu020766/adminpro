import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {

  imagen:string
  usuario:Usuario
  constructor(private usuarioService: UsuarioService, private router:Router) { }

  ngOnInit() {
    this.usuario = this.usuarioService.usuario

    this.imagen = '../assets/images/users/thalia.jpg'

    if (this.usuario.google) this.imagen = '../assets/images/users/manu.png'
  }

  logout() {
    this.usuarioService.logout()
    this.router.navigateByUrl('login')
  }

}
