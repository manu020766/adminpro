import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { HTTP_URL } from '../../config/config'
import { Usuario } from '../../models/usuario.model'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {


  constructor(private http:HttpClient) { }

  createUsuario(usuario:Usuario) {
    return this.http.post(HTTP_URL, usuario)
  }
}
