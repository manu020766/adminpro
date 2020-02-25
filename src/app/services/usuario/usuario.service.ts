import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { HTTP_URL } from '../../config/config'
import { Usuario } from '../../models/usuario.model'

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http:HttpClient) { }

  loginGoogle(token: string) {
    let url = HTTP_URL + '/login/google'

    return this.http.post(url, { token })
  }

  createUsuario(usuario:Usuario) {
    return this.http.post(HTTP_URL + '/usuario', usuario)
  }

  loginUsuario(usuario:Usuario) {
    return this.http.post(HTTP_URL + '/login', usuario)
  }
}
