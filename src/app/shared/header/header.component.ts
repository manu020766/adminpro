import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {

  imagen:string
  usuarioNombre:string
  constructor(private usuarioService: UsuarioService, private router:Router) { }

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
